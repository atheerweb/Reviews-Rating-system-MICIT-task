<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import { useForm } from 'vee-validate'
import { useUserReviewsStore } from '@/features/reviews/stores/userReviews'
import AppTextField from '@/components/AppTextField.vue'
import AppTextArea from '@/components/AppTextArea.vue'
import { validationSchema } from '../schema'
import AppButton from '@/components/AppButton.vue'
import AppSecondaryButton from '@/components/AppSecondaryButton.vue'
import { toast } from 'vue3-toastify'

const { resetForm, handleSubmit, meta } = useForm({
  validationSchema,
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { addReview } = useUserReviewsStore()

const onSubmit = handleSubmit((values) => {
  addReview(values)
  toast.success('Review submitted successfully')
  resetForm()
  emit('close')
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
  <!-- Action buttons -->
  <div class="col-span-12">
    <AppButton type="submit" form="review-form" :disabled="!meta.valid">
      submit your review
    </AppButton>
    <AppSecondaryButton class="w-full" @click="$emit('close')"> cancel </AppSecondaryButton>
  </div>
</template>
