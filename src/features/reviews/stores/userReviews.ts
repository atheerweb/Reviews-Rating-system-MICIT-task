import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { type userReview } from '../types/userReview'
import { paginate } from '@/utils/paginate'

export const useUserReviewsStore = defineStore('userReviews', () => {
  const userReviews = ref<userReview[]>([
    {
      id: 1,
      image: 'https://avatar.iran.liara.run/public/1',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 2,
      image: 'https://avatar.iran.liara.run/public/1',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 3,
      image: 'https://avatar.iran.liara.run/public/1',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 4,
      image: 'https://avatar.iran.liara.run/public/1',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 5,
      image: 'https://avatar.iran.liara.run/public/1',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 6,
      image: 'https://avatar.iran.liara.run/public/2',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 7,
      image: 'https://avatar.iran.liara.run/public/2',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 8,
      image: 'https://avatar.iran.liara.run/public/2',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 9,
      image: 'https://avatar.iran.liara.run/public/2',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
    {
      id: 10,
      image: 'https://avatar.iran.liara.run/public/2',
      name: 'David Mendenz',
      date: 'Today',
      review:
        "Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase Absolutely love the jacket it's so comfortable and stylish,Great purchase",
    },
  ])
  const currentPage = ref(1)
  const perPage = ref(5)

  const userReviewsData = computed(() => {
    return paginate<userReview>(userReviews.value, currentPage.value, perPage.value)
  })

  // const totalPages = computed(() => {
  //   return Math.ceil(userReviews.value.length / perPage.value)
  // })

  // const

  const nextPage = () => {
    currentPage.value++
  }

  return { userReviewsData, nextPage }
})
