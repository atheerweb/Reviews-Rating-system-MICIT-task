<script setup lang="ts"></script>
<template>
  <button class="secondary-button">
    <slot />
  </button>
</template>

<style scoped>
.secondary-button {
  @apply lg:rounded-md lg:w-auto float-end text-zinc-800 opacity-70 hover:opacity-100 px-3 py-2 text-base rounded-full  mt-1 mx-2 transition-all active:bg-zinc-200;
}
</style>
