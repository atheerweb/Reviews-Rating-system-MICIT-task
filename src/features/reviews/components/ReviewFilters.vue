<script setup lang="ts">
import ReviewFilter from './ReviewFilter.vue'

const filters = ['all', 'newest', 'oldest']


const model = defineModel<string>()

const update = (filter: string) => {
  model.value = filter
}

const checkIsActive = (filter: string) => model.value === filter
</script>

<template>
  <div id="filters-wrapper">
    <ReviewFilter v-for="filter in filters" :key="filter" :is-active="checkIsActive(filter)" @activate="update(filter)">
      {{ filter }}
    </ReviewFilter>
    <ReviewFilter v-for="n in 5" :key="n" :is-active="checkIsActive(`${n}`)" @activate="update(`${n}`)">
      <v-icon name="fa-star" fill="orange" />
      {{ n }}
    </ReviewFilter>
  </div>
</template>

<style scoped>
#filters-wrapper {
  @apply w-[35rem];
}
</style>
