<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
</script>

<template>
  <form action="">
    <label for="rating">Rating:</label>
    <AppReviewStars class="mb-3 mt-1" />
    <label for="name">Name:</label>
    <input
      name="name"
      id="name"
      placeholder="write your review here..."
      class="w-full border border-gray-200 rounded-md p-2 mt-1 mb-5"
    />
    <label for="description">Description:</label>
    <textarea
      name="description"
      id="description"
      placeholder="write your review here..."
      class="w-full h-32 border border-gray-200 rounded-md p-2 mt-1"
    ></textarea>
  </form>
</template>

<style scoped></style>
