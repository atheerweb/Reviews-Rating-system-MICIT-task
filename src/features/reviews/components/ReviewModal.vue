<script setup lang="ts">
import AppModal from '@/components/AppModal.vue'
import AppButton from '@/components/AppButton.vue'
import ReviewForm from '@/features/reviews/components/ReviewForm.vue'
import { useUserReviewsStore } from '@/features/reviews/stores/userReviews'

const { addReview } = useUserReviewsStore()
</script>

<template>
  <AppModal title="Write your Review">
    <template #activator>
      <AppButton>Rate and Review</AppButton>
    </template>
    <template #body>
      <ReviewForm @on-submit="addReview" />
    </template>
  </AppModal>
</template>

<style scoped></style>
