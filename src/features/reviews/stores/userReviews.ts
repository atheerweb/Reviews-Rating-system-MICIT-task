import { computed, ref, toRaw, unref, watch } from 'vue'
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
  type starsRange = IntRange<1, 6>
  const activeFilter = ref<'all' | 'newest' | 'oldest' | starsRange>('all')

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
    restCurrentPage()
    activeFilter.value = 'all'
  }

  const filterReviews = (rating: IntRange<1, 6>) => {
    restCurrentPage()
    filteredReviews.value = userReviews.value.filter(
      (review) => review.rating === activeFilter.value,
    )
  }

  const sortReviews = () => {
    filteredReviews.value = undefined
    userReviews.value.sort((a, b) => {
      if (activeFilter.value === 'newest') {
        return b.date.getTime() - a.date.getTime()
      }
      return a.date.getTime() - b.date.getTime()
    })
  }

  watch(activeFilter, () => {
    if (typeof activeFilter.value === 'number') {
      filterReviews(activeFilter.value)
    } else {
      sortReviews()
    }
  })

  return {
    userReviewsData,
    nextPage,
    addReview,
    totalReviews,
    totalPages,
    currentPage,
    activeFilter,
  }
})
