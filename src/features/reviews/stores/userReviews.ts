import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { type userReview } from '../types/userReview'
import { paginate } from '@/utils/paginate'
import { createRandomUserReview } from '../lib/createRandowUserReview'
import { createFakerArray } from '@/utils/createFakerArray'

export const useUserReviewsStore = defineStore('userReviews', () => {
  const userReviews = ref(createFakerArray<userReview>(200, createRandomUserReview))
  const currentPage = ref(1)
  const perPage = ref(5)

  const userReviewsData = computed(() => {
    return paginate<userReview>(userReviews.value, currentPage.value, perPage.value)
  })

  const nextPage = () => {
    currentPage.value++
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addReview = (review: any) => {
    console.log('Adding review', review)
    userReviews.value.unshift(review)
  }

  return { userReviewsData, nextPage, addReview }
})
