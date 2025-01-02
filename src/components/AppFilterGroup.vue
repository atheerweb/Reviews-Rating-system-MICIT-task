<script setup lang="ts">
import { provide } from 'vue';

const model = defineModel<string>({ default: '' })

const update = (filter: string) => {
  model.value = filter
}

provide('buttonGroupContext', {
  selected: model,
  update: (value: string) => update(value)
})
</script>

<template>
  <div id="filters-wrapper">
    <slot />
  </div>
</template>

<style scoped>
#filters-wrapper {
  @apply min-w-[35rem];
}
</style>
