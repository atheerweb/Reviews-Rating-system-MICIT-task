<script setup lang="ts">
import { ref } from 'vue'
import AppButton from './AppButton.vue'
import AppSecondaryButton from './AppSecondaryButton.vue'

defineProps<{
  title: string
}>()

const isVisible = ref(false)

defineEmits<{
  (e: 'submit'): void
}>()

const closeModal = () => {
  isVisible.value = false
}
</script>

<template>
  <!-- Activator wrapper - clicking this opens the modal -->
  <div @click="isVisible = true">
    <!-- Slot for custom activator content -->
    <slot name="activator" />
  </div>

  <!-- Modal overlay - only shown when modal is true -->
  <section v-show="isVisible" id="modal-wrapper">
    <!-- Modal content card -->
    <div id="modal-card">
      <!-- Close icon in top-right corner -->
      <v-icon name="io-close" id="close-icon" @click="closeModal()" />

      <!-- Modal title from props -->
      <h4 id="modal-title">{{ title }}</h4>

      <!-- Slot for main modal content -->
      <slot name="body" />

      <!-- Action buttons -->
      <AppButton @submit="$emit('submit')"> submit your review </AppButton>
      <AppSecondaryButton @click="closeModal()"> cancel </AppSecondaryButton>
    </div>
  </section>
</template>

<style scoped>
#close-icon {
  @apply float-end cursor-pointer fill-zinc-800;
}

#modal-title {
  @apply text-lg font-bold capitalize mb-3 mt-3;
}

#modal-card {
  @apply bg-white absolute w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl max-w-[35rem];
}

/* Modal overlay wrapper styling */
#modal-wrapper {
  @apply fixed w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0;
}
</style>
