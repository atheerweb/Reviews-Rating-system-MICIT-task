// Import necessary Vue and Pinia utilities
import { computed, ref, toRaw, watch } from 'vue'
import { defineStore } from 'pinia'
// Import types and utilities
import { type UserReview, type UserReviewItem } from '../types/userReview'
import { paginate } from '@/utils/paginate'
import { createRandomUserReview } from '../lib/createRandowUserReview'
import { createFakerArray } from '@/utils/createFakerArray'
import { faker } from '@faker-js/faker'
import type { StarsRange } from '../types/StarsRange'

/**
 * Pinia store for managing user reviews with features including:
 * - Pagination
 * - Filtering by star rating
 * - Sorting by date
 * - Adding new reviews
 */
export const useUserReviewsStore = defineStore('userReviews', () => {
  // Initialize store with 200 mock review items
  const userReviews = ref(createFakerArray<UserReviewItem>(200, createRandomUserReview))

  // Track filtered reviews separately from main reviews array
  // undefined means no filters are active
  const filteredReviews = ref<UserReviewItem[] | undefined>()

  // Pagination state
  const currentPage = ref(1)
  const perPage = ref(5)

  // Tracks current active filter:
  // - 'all': Show all reviews
  // - 'newest': Sort by most recent
  // - 'oldest': Sort by oldest
  // - number (1-5): Filter by star rating
  const activeFilter = ref<'all' | 'newest' | 'oldest' | StarsRange>('all')

  // Returns either filtered reviews if filters are active, or all reviews if not
  const arrToFiltered = computed(() => filteredReviews.value || userReviews.value)

  // Calculate total number of pages based on current dataset and items per page
  const totalPages = computed(() => Math.ceil(arrToFiltered.value.length / perPage.value))

  // Get total number of reviews in the store
  const totalReviews = computed(() => userReviews.value.length)

  // Get current page of reviews based on pagination settings
  const userReviewsData = computed(() => {
    return paginate<UserReviewItem>(arrToFiltered.value, currentPage.value, perPage.value)
  })

  /**
   * Helper function to reset pagination to first page
   * Called when filters change or new reviews are added
   */
  const resetCurrentPage = () => {
    currentPage.value = 1
  }

  /**
   * Adds a new review to the store
   * @param review - The review object to add (without id or date)
   */
  const addReview = (review: UserReview) => {
    // Create deep clone to avoid modifying original data
    const formData = structuredClone(toRaw(review))

    // Create complete review object with generated ID and current timestamp
    const userReview = {
      id: faker.string.uuid(),
      date: new Date(),
      ...formData,
    }

    // Reset to first page and clear filters
    resetCurrentPage()
    activeFilter.value = 'all'

    // Add new review to beginning of array
    userReviews.value.unshift(userReview)
  }

  /**
   * Filters reviews array by star rating
   * @param rating - Star rating to filter by (1-5)
   */
  const filterReviews = () => {
    filteredReviews.value = userReviews.value.filter(
      (review) => review.rating === activeFilter.value,
    )
  }

  /**
   * Sorts reviews array by date based on activeFilter value
   * Called when activeFilter is set to 'newest' or 'oldest'
   */
  const sortReviews = () => {
    // Create new array to avoid modifying original
    filteredReviews.value = [...userReviews.value]

    // Sort array in place based on dates
    filteredReviews.value.sort((a, b) => {
      if (activeFilter.value === 'newest') {
        return b.date.getTime() - a.date.getTime() // Most recent first
      }
      return a.date.getTime() - b.date.getTime() // Oldest first
    })
  }

  // Watch for changes to activeFilter and apply appropriate filtering/sorting
  watch(activeFilter, () => {
    resetCurrentPage() // Reset to first page when filter changes

    if (activeFilter.value === 'all') {
      // Clear filters by setting filteredReviews to undefined
      filteredReviews.value = undefined
      return
    }

    if (typeof activeFilter.value === 'number') {
      // If filter is a number, apply star rating filter
      filterReviews()
    } else {
      // Otherwise sort by date (newest/oldest)
      sortReviews()
    }
  })

  // Export public store interface
  return {
    userReviewsData, // Paginated review data for current page
    addReview, // Method to add new reviews
    totalReviews, // Total number of reviews
    totalPages, // Total number of pages
    currentPage, // Current page number
    activeFilter, // Current active filter
  }
})
