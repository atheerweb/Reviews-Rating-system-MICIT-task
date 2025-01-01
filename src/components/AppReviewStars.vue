<!-- <script setup lang="ts">
defineProps<{ stars: number }>()
</script> -->

<template>
  <div>
    <v-icon v-for="n in 5" :key="n" name="fa-star" fill="orange" />
  </div>
</template>

<!-- <style scoped></style> -->
