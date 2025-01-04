import { computed, ref, toRaw, unref } from 'vue'
import { defineStore } from 'pinia'
import { type UserReview, type UserReviewItem } from '../types/userReview'
import { paginate } from '@/utils/paginate'
import { createRandomUserReview } from '../lib/createRandowUserReview'
import { createFakerArray } from '@/utils/createFakerArray'
import { faker } from '@faker-js/faker'

export const useUserReviewsStore = defineStore('userReviews', () => {
  const totalReviews = 200
  const userReviews = ref(createFakerArray<UserReviewItem>(totalReviews, createRandomUserReview))
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

  return { userReviewsData, nextPage, addReview, totalReviews }
})
