<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header></header>

  <main class="p-5 xl:p-10">
    <RouterView />
  </main>
</template>
