<script setup lang="ts">
defineProps<{ label: string }>()
</script>
<template>
  <button class="secondary-button">{{ label }}</button>
</template>

<style scoped>
.secondary-button {
  @apply lg:rounded-md lg:w-auto float-end text-zinc-800 hover:text-zinc-950 px-3 py-2 text-base rounded-full transition-colors w-full mt-1 mx-2;
}
</style>
