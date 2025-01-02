<script setup lang="ts">
import AppFilterGroup from '@/components/AppFilterGroup.vue'
import AppFilter from '@/components/AppFilter.vue';
import { ref } from 'vue';

const filters = ['all', 'newest', 'oldest']


const activeFilter = ref('all')
</script>

<template>
  <AppFilterGroup v-model="activeFilter" id="filters-wrapper">
    <AppFilter v-for="filter in filters" :key="filter" :value="filter">
      {{ filter }}
    </AppFilter>
    <AppFilter v-for="n in 5" :key="n" :value="`${n}`">
      <v-icon name="fa-star" fill="orange" />
      {{ n }}
    </AppFilter>
  </AppFilterGroup>

</template>

<style scoped>
#filters-wrapper {
  @apply w-[35rem];
}
</style>
