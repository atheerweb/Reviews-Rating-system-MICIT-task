<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'

const props = defineProps<{ value: string | number }>()

defineEmits<{ (e: 'activate'): void }>()

const buttonGroup = inject<{
  selected: Ref<string>
  update: (value: string | number) => void
}>('buttonGroupContext')

const isActive = computed(() => {
  return buttonGroup!.selected.value === props.value
})
</script>

<template>
  <button
    :class="['filter-btn', { 'filter-btn--active': isActive }]"
    @click="buttonGroup!.update(props.value)"
  >
    <slot />
  </button>
</template>

<style scoped>
.filter-btn {
  @apply rounded-full mx-1 border-gray-200 border capitalize text-gray-500 text-center py-1 px-3 cursor-pointer inline-block transition-colors;
}

button.filter-btn--active {
  @apply bg-zinc-800 text-white;
}
</style>
