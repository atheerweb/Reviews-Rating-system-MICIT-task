<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import AppReviews from '@/components/AppReviews.vue'
</script>

<template>
  <main class="flex flex-col items-center lg:flex-row lg:gap-10 lg:items-start">
    <aside class="w-full bg-[#F2F2F2] p-5 rounded-xl min-h-60">
      <img
        src="/dr-crz-jacket.png"
        alt="pizza"
        title="pizza"
        class="w-full max-w-[400px] lg:w-[400px] m-auto"
      />
    </aside>
    <article>
      <section>
        <h1 class="mt-5 font-bold text-xl lg:text-2xl">DR CRZ Jacket</h1>
        <p class="text-gray-400 capitalize mt-1">leather jacket</p>

        <div class="flex gap-1 items-center mt-2">
          <app-review-stars />
          <strong>4.9</strong>
          <span class="text-gray-400"> (1.2k Reviews)</span>
        </div>
        <h2 class="text-3xl mt-5 font-bold">$69.00</h2>

        <h4 class="text-lg font-bold mt-10 mb-2">Description</h4>
        <p class="text-gray-400">
          The "DR CRZ Jacket" is a stylish and versatile piece of outerwear designed to provide both
          fashion and functionality. Crafted with attention to detail The "DR CRZ Jacket" is a
          stylish and versatile piece of outerwear designed to provide both fashion and
          functionality. Crafted with attention to detail The "DR CRZ Jacket" is a stylish and
          versatile piece of outerwear designed to provide both fashion and functionality. Crafted
          with attention to detail The "DR CRZ Jacket" is a stylish and versatile piece of outerwear
          designed to provide both fashion and functionality. Crafted with attention to detail
        </p>
      </section>
      <section>
        <div class="flex items-center justify-between mt-10 mb-2">
          <h4 class="text-lg font-bold">Reviews <span class="font-normal">(1.2k)</span></h4>
          <button
            class="bg-gray-200 text-gray-600 px-3 py-2 hover:bg-gray-300 hover:text-gray-800 text-base rounded-md transition-colors"
          >
            see more
          </button>
        </div>
        <section class="flex flex-col gap-8 mt-10">
          <AppReviews v-for="n in 5" :key="n" />
        </section>
      </section>
    </article>
  </main>
</template>
