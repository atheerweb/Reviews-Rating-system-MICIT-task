import { computed, ref, toRaw, unref } from 'vue'
import { defineStore } from 'pinia'
import { type UserReview, type UserReviewItem } from '../types/userReview'
import { paginate } from '@/utils/paginate'
import { createRandomUserReview } from '../lib/createRandowUserReview'
import { createFakerArray } from '@/utils/createFakerArray'
import { faker } from '@faker-js/faker'
import type { IntRange } from '@/types/range'

export const useUserReviewsStore = defineStore('userReviews', () => {
  const totalReviews = computed(() => userReviews.value.length)
  const userReviewsFakeDB = createFakerArray<UserReviewItem>(200, createRandomUserReview)

  const userReviews = ref(userReviewsFakeDB)
  const currentPage = ref(1)
  const perPage = ref(5)

  const userReviewsData = computed(() => {
    return paginate<UserReviewItem>(userReviews.value, currentPage.value, perPage.value)
  })

  const nextPage = () => {
    currentPage.value++
  }

  const addReview = (review: UserReview) => {
    const formData = structuredClone(toRaw(review))
    const userReview = { id: faker.string.uuid(), date: new Date(), ...formData }
    userReviews.value.unshift(userReview)
  }

  const filterReviews = (rating: IntRange<1, 6>) => {
    userReviews.value = userReviewsFakeDB.filter((review) => review.rating === rating)
  }

  const sortReviews = (sortBy: 'newest' | 'oldest' | 'all') => {
    if (sortBy === 'all') {
      userReviews.value = userReviewsFakeDB
      return
    }

    const sortedReviews = userReviewsFakeDB.sort((a, b) => {
      if (sortBy === 'newest') {
        return b.date.getTime() - a.date.getTime()
      }
      return a.date.getTime() - b.date.getTime()
    })

    userReviews.value = [...sortedReviews]
    // console.log('sortReviews', userReviews.value)
  }

  return { userReviewsData, nextPage, addReview, totalReviews, filterReviews, sortReviews }
})
