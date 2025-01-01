<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
defineProps<{
  title: string
  category: string
  description: string
  price: number
  totalReviews: number
  avgNumberReview: number
}>()
</script>
<template>
  <h1 id="product-name">{{ title }}</h1>
  <p id="product-category">{{ category }}</p>

  <div id="product-reviews">
    <app-review-stars />
    <strong>{{ avgNumberReview }}</strong>
    <span id="product-reviews-stars"> ({{ totalReviews }} Reviews)</span>
  </div>
  <h2 id="product-price">${{ price }}</h2>

  <h4 id="product-description-title">Description</h4>
  <p id="product-description">
    {{ description }}
  </p>
</template>

<style scoped>
#product-name {
  @apply mt-5 font-bold text-xl lg:text-2xl;
}
#product-category {
  @apply text-gray-400 capitalize mt-1;
}
#product-description {
  @apply text-gray-400;
}
#product-description-title {
  @apply text-lg font-bold mt-10 mb-2;
}
#product-price {
  @apply text-3xl mt-5 font-bold;
}
#product-reviews {
  @apply flex gap-1 items-center mt-2;
}
#product-reviews-stars {
  @apply text-gray-400;
}
</style>
