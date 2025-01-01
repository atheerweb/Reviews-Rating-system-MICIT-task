<script setup lang="ts">
import ReviewFilter from './ReviewFilter.vue';


const activeFilter = defineModel<string>({ default: 'all' })

const setActiveFilter = (filter: string) => {
  activeFilter.value = filter
}

</script>
<template>
  <ReviewFilter
    v-for="n in 5"
    :key="n"
    :is-active="`${n}` === activeFilter"
    @activate="setActiveFilter(`${n}`)"
  >
    <v-icon name="fa-star" fill="orange" />
    {{ n }}
  </ReviewFilter>
</template>


<style scoped></style>
