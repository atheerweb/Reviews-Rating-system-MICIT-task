<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import { useForm } from 'vee-validate'
import { useUserReviewsStore } from '@/features/reviews/stores/userReviews'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

const schema = toTypedSchema(
  yup.object({
    rating: yup.number().required(),
    name: yup.string().required().min(2).max(50),
    review: yup.string().required().min(10).max(500),
  }),
)
const { defineField, resetForm, errors, handleSubmit } = useForm({
  validationSchema: schema,
})
const { addReview } = useUserReviewsStore()

const [rating, ratingAttrs] = defineField('rating')
const [name, nameAttrs] = defineField('name')
const [review, reviewAttrs] = defineField('review')

// Creates a typed schema for vee-validate

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values))
  addReview(values)
  resetForm()
})
</script>

<template>
  <form id="review-form" @submit.prevent="onSubmit">
    <label for="rating">Rating:</label>
    <AppReviewStars v-model="rating" v-bind="ratingAttrs" class="mb-3 mt-1" />
    {{ errors.rating }}
    <label for="name">Name:</label>
    <input
      v-model="name"
      v-bind="nameAttrs"
      name="name"
      id="name"
      placeholder="write your review here..."
      class="text-input"
    />
    {{ errors.name }}
    <label for="description">Description:</label>
    <textarea
      v-model="review"
      v-bind="reviewAttrs"
      name="description"
      id="description"
      placeholder="write your review here..."
      class="text-area"
    ></textarea>
    {{ errors.review }}
  </form>
</template>

<style scoped>
.text-area {
  @apply w-full h-32 border border-gray-200 rounded-md p-2 mt-1;
}
.text-input {
  @apply w-full border border-gray-200 rounded-md p-2 mt-1 mb-5;
}
</style>
