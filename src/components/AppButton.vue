

<template>
  <button type="submit" class="app-button">
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  @apply bg-zinc-800 lg:rounded-md lg:w-auto float-end text-white px-3 py-2 hover:bg-zinc-950 text-base rounded-full transition-colors w-full mt-1;
}
</style>
