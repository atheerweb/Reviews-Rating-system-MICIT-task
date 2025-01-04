// Import necessary Vue and Pinia utilities
import { computed, ref, toRaw, watch } from 'vue'
import { defineStore } from 'pinia'
// Import types and utilities
import { type UserReview, type UserReviewItem } from '../types/userReview'
import { paginate } from '@/utils/paginate'
import { createRandomUserReview } from '../lib/createRandowUserReview'
import { createFakerArray } from '@/utils/createFakerArray'
import { faker } from '@faker-js/faker'
import type { IntRange } from '@/types/range'

/**
 * Store for managing user reviews with pagination, filtering, and sorting capabilities
 */
export const useUserReviewsStore = defineStore('userReviews', () => {
  // Initialize store with mock data
  const userReviews = ref(createFakerArray<UserReviewItem>(200, createRandomUserReview))

  // State for filtered reviews and pagination
  const filteredReviews = ref<UserReviewItem[] | undefined>()
  const currentPage = ref(1)
  const perPage = ref(5)

  // Type definition for star ratings (1-5)
  type starsRange = IntRange<1, 6>

  // Filter state can be 'all', 'newest', 'oldest', or a star rating
  const activeFilter = ref<'all' | 'newest' | 'oldest' | starsRange>('all')

  // Computed property to get either filtered or all reviews
  const arrToFiltered = computed(() => filteredReviews.value || userReviews.value)

  // Calculate total pages based on current filtered/total items
  const totalPages = computed(() => Math.ceil(arrToFiltered.value.length / perPage.value))

  // Get total number of reviews
  const totalReviews = computed(() => userReviews.value.length)

  // Get paginated data based on current page and items per page
  const userReviewsData = computed(() => {
    return paginate<UserReviewItem>(arrToFiltered.value, currentPage.value, perPage.value)
  })
  

  /**
   * Resets pagination to first page
   */
  const restCurrentPage = () => {
    currentPage.value = 1
  }

  /**
   * Adds a new review to the store
   * @param review - The review object to add
   */
  const addReview = (review: UserReview) => {
    // Create deep clone of review data
    const formData = structuredClone(toRaw(review))
    // Add unique ID and current date
    const userReview = {
      id: faker.string.uuid(),
      date: new Date(),
      ...formData,
    }
    // Add to beginning of array
    userReviews.value.unshift(userReview)
    // Reset pagination and filters
    restCurrentPage()
    activeFilter.value = 'all'
  }

  /**
   * Filters reviews by star rating
   * @param rating - Star rating to filter by (1-5)
   */
  const filterReviews = (rating: IntRange<1, 6>) => {
    restCurrentPage()
    filteredReviews.value = userReviews.value.filter(
      (review) => review.rating === activeFilter.value,
    )
  }

  /**
   * Sorts reviews by date based on activeFilter
   * 'newest' - most recent first
   * 'oldest' - oldest first
   */
  const sortReviews = () => {
    // Clear filtered reviews
    filteredReviews.value = undefined
    // Sort array based on date
    userReviews.value.sort((a, b) => {
      if (activeFilter.value === 'newest') {
        return b.date.getTime() - a.date.getTime()
      }
      return a.date.getTime() - b.date.getTime()
    })
  }

  // Watch for filter changes and apply appropriate filtering/sorting
  watch(activeFilter, () => {
    if (typeof activeFilter.value === 'number') {
      filterReviews(activeFilter.value)
    } else {
      sortReviews()
    }
  })

  // Export store properties and methods
  return {
    userReviewsData, // Paginated review data
    addReview, // Add new review
    totalReviews, // Total review count
    totalPages, // Total pages count
    currentPage, // Current page number
    activeFilter, // Current active filter
  }
})
