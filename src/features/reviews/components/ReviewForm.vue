<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import { reactive } from 'vue'

const formData = reactive({
  rating: 0,
  name: '',
  review: '',
})

defineEmits<{
  (e: 'onSubmit', data: typeof formData): void
}>()
</script>

<template>
  <form id="form" @submit.prevent="$emit('onSubmit', formData)">
    <label for="rating">Rating:</label>
    <AppReviewStars v-model="formData.rating" class="mb-3 mt-1" />
    <label for="name">Name:</label>
    <input
      v-model="formData.name"
      name="name"
      id="name"
      placeholder="write your review here..."
      class="w-full border border-gray-200 rounded-md p-2 mt-1 mb-5"
    />
    <label for="description">Description:</label>
    <textarea
      v-model="formData.review"
      name="description"
      id="description"
      placeholder="write your review here..."
      class="w-full h-32 border border-gray-200 rounded-md p-2 mt-1"
    ></textarea>
  </form>
</template>

<style scoped></style>
