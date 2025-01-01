<script setup lang="ts">
import { ref } from 'vue'
import ReviewFilter from './ReviewFilter.vue'
import ReviewStarsFilters from './ReviewStarsFilters.vue'
import ReviewDateFilters from './ReviewDateFilters.vue'

const activeFilter = defineModel<string>({ default: 'all' })

const setActiveFilter = (filter: string) => {
  activeFilter.value = filter
}
</script>

<template>
  <div id="filters-wrapper">
    <ReviewDateFilters />
    <ReviewStarsFilters />
  </div>
</template>

<style scoped>
#filters-wrapper {
  @apply w-[35rem];
}
</style>
