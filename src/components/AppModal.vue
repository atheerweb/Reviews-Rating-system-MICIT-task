<script setup lang="ts">
import { ref } from 'vue'
import AppButton from './AppButton.vue'
import AppSecondaryButton from './AppSecondaryButton.vue';

defineProps<{
  title: string
}>()

const modal = ref(false)
</script>

<template>
  <section id="modal-wrapper">
    <div id="modal-card">
      <v-icon name="io-close" id="close-icon" @close="modal = false" />
      <h4 id="modal-title">{{ title }}</h4>
      <slot />
      <AppButton label="submit your review" />
      <AppSecondaryButton label="cancel" />
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
#modal-wrapper {
  @apply fixed w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0;
}
</style>
