<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'

defineProps<{
  name: string
  date: string
  // rating: number
  review: string
  image: string
}>()
</script>

<template>
  <section class="user-review">
    <img :src="image" alt="customer" class="user-image" />
    <section class="review-content">
      <header class="review-header">
        <strong class="review-title">{{ name }}</strong>
        <p class="review-date">{{ date }}</p>
      </header>
      <app-review-stars class="user-review-stars" />
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
  @apply w-16;
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
  @apply text-gray-400;
}
.user-review-stars {
  @apply mt-2 mb-1;
}
.review-text {
  @apply text-gray-400;
}
</style>
