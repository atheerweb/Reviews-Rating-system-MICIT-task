<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import { reactive, ref } from 'vue'
import { useForm } from 'vee-validate'

interface FormData {
  rating: number
  name: string
  review: string
}

const { defineField, resetForm, values } = useForm<FormData>()

const [rating, ratingAttrs] = defineField('rating')
const [name, nameAttrs] = defineField('name')
const [review, reviewAttrs] = defineField('review')

const emit = defineEmits<{
  (e: 'onSubmit', data: FormData): void
}>()

const onSubmit = () => {
  emit('onSubmit', values)
  resetForm()
}
</script>

<template>
  <form ref="form" id="form" @submit.prevent="onSubmit">
    {{ values }}
    <label for="rating">Rating:</label>
    <AppReviewStars v-model="rating" v-bind="ratingAttrs" class="mb-3 mt-1" />
    <label for="name">Name:</label>
    <input
      v-model="name"
      v-bind="nameAttrs"
      name="name"
      id="name"
      placeholder="write your review here..."
      class="w-full border border-gray-200 rounded-md p-2 mt-1 mb-5"
    />
    <label for="description">Description:</label>
    <textarea
      v-model="review"
      v-bind="reviewAttrs"
      name="description"
      id="description"
      placeholder="write your review here..."
      class="w-full h-32 border border-gray-200 rounded-md p-2 mt-1"
    ></textarea>
  </form>
</template>

<style scoped></style>
