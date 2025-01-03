<script setup lang="ts">
defineProps<{
  errorMessage: string | undefined
}>()
</script>

<template>
  <p class="error-msg">
    {{ errorMessage }}
  </p>
</template>

<style scoped>
.error-msg {
  @apply text-red-500 text-sm mt-1;
}
</style>
