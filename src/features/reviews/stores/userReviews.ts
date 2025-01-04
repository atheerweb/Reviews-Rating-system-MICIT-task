import { computed, ref, toRaw, unref } from 'vue'
import { defineStore } from 'pinia'
import { type UserReview, type UserReviewItem } from '../types/userReview'
import { paginate } from '@/utils/paginate'
import { createRandomUserReview } from '../lib/createRandowUserReview'
import { createFakerArray } from '@/utils/createFakerArray'
import { faker } from '@faker-js/faker'
import type { IntRange } from '@/types/range'

export const useUserReviewsStore = defineStore('userReviews', () => {
  const userReviewsFakeDB = createFakerArray<UserReviewItem>(200, createRandomUserReview)
  const userReviews = ref(userReviewsFakeDB)
  const filteredReviews = ref<UserReviewItem[] | undefined>()
  const arrToFiltered = computed(() => filteredReviews.value || userReviews.value)
  const currentPage = ref(1)
  const perPage = ref(5)

  const totalPages = computed(() => Math.ceil(arrToFiltered.value.length / perPage.value))

  const totalReviews = computed(() => userReviews.value.length)

  const userReviewsData = computed(() => {
    return paginate<UserReviewItem>(arrToFiltered.value, currentPage.value, perPage.value)
  })

  const nextPage = (page: number) => {
    currentPage.value = page
  }

  const restCurrentPage = () => {
    currentPage.value = 1
  }

  const addReview = (review: UserReview) => {
    const formData = structuredClone(toRaw(review))
    const userReview = { id: faker.string.uuid(), date: new Date(), ...formData }
    userReviews.value.unshift(userReview)
  }

  const filterReviews = (rating: IntRange<1, 6>) => {
    currentPage.value = 1
    filteredReviews.value = userReviews.value.filter((review) => review.rating === rating)
  }

  const sortReviews = (sortBy: 'newest' | 'oldest' | 'all') => {
    if (sortBy === 'all') {
      filteredReviews.value = undefined
      return
    }

    userReviews.value.sort((a, b) => {
      if (sortBy === 'newest') {
        return b.date.getTime() - a.date.getTime()
      }
      return a.date.getTime() - b.date.getTime()
    })
  }

  return {
    userReviewsData,
    nextPage,
    addReview,
    totalReviews,
    filterReviews,
    sortReviews,
    totalPages,
    currentPage,
  }
})
