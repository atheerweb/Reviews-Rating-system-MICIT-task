<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import { useForm } from 'vee-validate'
import { useUserReviewsStore } from '@/features/reviews/stores/userReviews'
import AppTextField from '@/components/AppTextField.vue'
import AppTextArea from '@/components/AppTextArea.vue'
import { validationSchema } from '../schema'

const { defineField, resetForm, handleSubmit, values } = useForm({
  validationSchema,
})
const { addReview } = useUserReviewsStore()

// Creates a typed schema for vee-validate

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values))
  addReview(values)
  resetForm()
})
</script>

<template>
  <form id="review-form" class="grid gap-4 grid-cols-12" @submit.prevent="onSubmit">
    <AppReviewStars name="rating" class="col-span-12" />

    <AppTextField name="name" id="name" placeholder="Adham Jones" class="col-span-12" />

    <AppTextArea
      name="review"
      id="review"
      placeholder="write your review here..."
      class="col-span-12"
    />
  </form>
</template>
