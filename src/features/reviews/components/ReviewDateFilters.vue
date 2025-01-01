<script setup lang="ts">
import ReviewFilter from './ReviewFilter.vue';

const filters = ['all', 'newest', 'oldest']

const activeFilter = defineModel<string>({ default: 'all' })

const setActiveFilter = (filter: string) => {
  activeFilter.value = filter
}
</script>
<template>
  <ReviewFilter
      v-for="filter in filters"
      :key="filter"
      :is-active="filter === activeFilter"
      @activate="setActiveFilter(filter)"
    >
      {{ filter }}
    </ReviewFilter>
</template>

<style scoped></style>
