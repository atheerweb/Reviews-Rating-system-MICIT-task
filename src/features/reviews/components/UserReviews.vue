<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import type { UserReviewItem } from '../types/userReview'
import { computed } from 'vue'
import { formatDate } from '@/utils/formatDate'

//  complex data types are not compiled by vue 3 script setup yet so I will have to write the types statically again https://github.com/vuejs/core/issues/8286 for now
const props = defineProps<{
  image?: string
  name: string
  date: Date
  review: string
  rating: number
}>()

const getImage = computed(() => props.image || '/Profile_avatar_placeholder_large.webp')
</script>

<template>
  <section class="user-review">
    <img
      :src="getImage"
      alt="customer"
      class="user-image"
      width="64"
      height="64"
      title="customer"
      loading="lazy"
    />
    <section class="review-content">
      <header class="review-header">
        <strong class="review-title">{{ name }}</strong>
        <p class="review-date">{{ formatDate(date) }}</p>
      </header>
      <app-review-stars :value="rating" class="user-review-stars" readonly />
      <p class="review-text">
        {{ review }}
      </p>
    </section>
  </section>
</template>

<style scoped>
.user-review {
  @apply flex gap-5 items-start w-full;
}
.user-image {
  @apply w-16 rounded-full;
}
.review-content {
  @apply w-full;
}
.review-header {
  @apply flex items-center justify-between;
}
.review-title {
  @apply block;
}
.review-date {
  @apply text-gray-500;
}
.user-review-stars {
  @apply mt-2 mb-1;
}
.review-text {
  @apply text-gray-500;
}
</style>
