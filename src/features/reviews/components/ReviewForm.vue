<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import { useForm } from 'vee-validate'
import { useUserReviewsStore } from '@/features/reviews/stores/userReviews'
import AppTextField from '@/components/AppTextField.vue'
import AppTextArea from '@/components/AppTextArea.vue'
import { validationSchema } from '../schema'
import { provide } from 'vue'
import AppButton from '@/components/AppButton.vue'
import AppSecondaryButton from '@/components/AppSecondaryButton.vue'
import { toast } from 'vue3-toastify'

const { defineField, resetForm, handleSubmit, values, meta } = useForm({
  validationSchema,
})
const { addReview } = useUserReviewsStore()

// Creates a typed schema for vee-validate

const onSubmit = handleSubmit((values) => {
  toast.success('Review submitted successfully')
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

    <!-- Action buttons -->
    <div class="col-span-12">
      <AppButton type="submit" form="review-form" :disabled="!meta.valid">
        submit your review
      </AppButton>
      <AppSecondaryButton class="w-full"> cancel </AppSecondaryButton>
    </div>
  </form>
</template>
