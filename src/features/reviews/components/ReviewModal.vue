<script setup lang="ts">
import AppModal from '@/components/AppModal.vue'
import AppButton from '@/components/AppButton.vue'
import ReviewForm from '@/features/reviews/components/ReviewForm.vue'
</script>



<template>
  <AppModal title="Write your Review">
    <template #activator>
      <AppButton>Rate and Review</AppButton>
    </template>
    <template #body>
      <ReviewForm />
    </template>
  </AppModal>
</template>


<style scoped></style>
