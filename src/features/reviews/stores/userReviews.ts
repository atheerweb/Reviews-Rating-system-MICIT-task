import { computed, ref, toRaw, unref } from 'vue'
import { defineStore } from 'pinia'
import { type UserReview } from '../types/userReview'
import { paginate } from '@/utils/paginate'
import { createRandomUserReview } from '../lib/createRandowUserReview'
import { createFakerArray } from '@/utils/createFakerArray'

export const useUserReviewsStore = defineStore('userReviews', () => {
  const userReviews = ref(createFakerArray<UserReview>(200, createRandomUserReview))
  const currentPage = ref(1)
  const perPage = ref(5)

  const userReviewsData = computed(() => {
    return paginate<UserReview>(userReviews.value, currentPage.value, perPage.value)
  })

  const nextPage = () => {
    currentPage.value++
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addReview = (review: any) => {
    const userReview = structuredClone(toRaw(review))
    userReviews.value.unshift(userReview)
  }

  return { userReviewsData, nextPage, addReview }
})
