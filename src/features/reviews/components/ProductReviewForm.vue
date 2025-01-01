<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue';
</script>

<template>
  <div
    class="bg-white absolute w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl max-w-[35rem]"
  >
    <v-icon name="io-close" fill="zinc-800" class="float-end" />
    <h4 class="text-lg font-bold capitalize mb-3 mt-3">Write your review</h4>
    <form action="">
      <label for="rating">Rating:</label>
      <AppReviewStars class="mb-3 mt-1" />
      <label for="name">Name:</label>
      <input
        name="name"
        id="name"
        placeholder="write your review here..."
        class="w-full border border-gray-200 rounded-md p-2 mt-1 mb-5"
      />
      <label for="description">Description:</label>
      <textarea
        name="description"
        id="description"
        placeholder="write your review here..."
        class="w-full h-32 border border-gray-200 rounded-md p-2 mt-1"
      ></textarea>

      <button
        type="submit"
        dir="ltr"
        class="bg-zinc-800 lg:rounded-md lg:w-auto float-end text-white px-3 py-2 hover:bg-zinc-950 text-base rounded-full transition-colors w-full mt-1"
      >
        submit your review
      </button>
      <button
        type="submit"
        dir="ltr"
        class="lg:rounded-md lg:w-auto float-end text-zinc-800 hover:text-zinc-950 px-3 py-2 text-base rounded-full transition-colors w-full mt-1 mx-2"
      >
        cancel
      </button>
    </form>
  </div>
</template>


<style scoped></style>
