<script setup lang="ts">
import AppFilterGroup from '@/components/AppFilterGroup.vue'
import AppFilter from '@/components/AppFilter.vue'
import { ref } from 'vue'
import { useUserReviewsStore } from '../stores/userReviews'
import { storeToRefs } from 'pinia'

const filters: ('oldest' | 'newest' | 'all')[] = ['all', 'newest', 'oldest']

const store = useUserReviewsStore()
const { activeFilter } = storeToRefs(store)
</script>

<template>
  <AppFilterGroup v-model="activeFilter" id="filters-wrapper">
    <AppFilter v-for="filter in filters" :key="filter" :value="filter">
      {{ filter }}
    </AppFilter>
    <!-- @vue-ignore vue doesn't understand that in is in the range 1,5 -->
    <AppFilter v-for="n in 5" :key="n" :value="n">
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
