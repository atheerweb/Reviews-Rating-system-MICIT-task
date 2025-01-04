<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>
<template>
  <div id="product-card">
    <img :src="image" alt="product image" width="311" height="311" title="product image" class="object-contain mx-auto" />
  </div>
</template>

<style scoped>
#product-card {
  @apply max-w-[400px] max-h-[400px] aspect-square bg-[#F2F2F2] p-5 rounded-xl flex justify-self-center;
}
</style>
