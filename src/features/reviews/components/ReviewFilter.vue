<script setup lang="ts">
defineProps<{ isActive: boolean }>()

defineEmits<{ (e: 'activate'): void }>()
</script>

<template>
  <button :class="['filter-btn', { 'filter-btn--active': isActive }]" @click="$emit('activate')">
    <slot />
  </button>
</template>

<style scoped>
.filter-btn {
  @apply rounded-full mx-1 border-gray-200 border capitalize text-gray-500 text-center py-1 px-3 cursor-pointer inline-block;
}

button.filter-btn--active {
  @apply bg-zinc-800 text-white;
}
</style>
