<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import type { UserReview } from '../types/userReview'

defineProps<UserReview>()
</script>

<template>
  <section class="user-review">
    <img
      :src="image || '/Profile_avatar_placeholder_large.png'"
      alt="customer"
      class="user-image"
    />
    <section class="review-content">
      <header class="review-header">
        <strong class="review-title">{{ name }}</strong>
        <p class="review-date">{{ date }}</p>
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
  @apply text-gray-400;
}
.user-review-stars {
  @apply mt-2 mb-1;
}
.review-text {
  @apply text-gray-400;
}
</style>
