<script setup lang="ts">
import AppReviewStars from '@/components/AppReviewStars.vue'
import AppReviews from '@/components/AppReviews.vue'
</script>

<template>
  <main class="grid grid-cols-12 gap-5">
    <aside class="col-span-12 lg:col-span-4">
      <div
        class="max-w-[400px] max-h-[400px] aspect-square bg-[#F2F2F2] p-5 rounded-xl flex justify-self-center"
      >
        <img src="/dr-crz-jacket.png" alt="pizza" title="pizza" class="object-contain mx-auto" />
      </div>
    </aside>
    <article class="col-span-12 lg:col-span-8">
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

      <section class="fixed hidden w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0">
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
      </section>
      <section>
        <div class="flex items-center justify-between mt-10 mb-2 gap-5 flex-wrap">
          <h4 class="text-lg font-bold flex-grow">
            Reviews <span class="font-normal">(1.2k)</span>
          </h4>
          <button class="text-zinc-800 hover:text-zinc-950 text-base transition-colors">
            see more
          </button>

          <div
            class="bg-white lg:bg-transparent shadow-xl lg:shadow-none  shadow-black w-full lg:w-auto lg:static fixed bottom-0 left-0 h-auto py-6 lg:p-0 px-4 flex items-end"
          >
            <button
              type="submit"
              dir="ltr"
              class="bg-zinc-800 lg:rounded-md lg:w-auto float-end text-white px-3 py-2 hover:bg-zinc-950 text-base rounded-full transition-colors w-full mt-1"
            >
              submit your review
            </button>
          </div>
        </div>
        <section
          class="overflow-x-auto w-[calc(100vw-3rem)] lg:w-auto h-12 overflow-y-hidden py-2 whitespace-nowrap"
        >
          <div class="w-[35rem]">
            <button
              class="rounded-full mx-1 bg-zinc-800 text-white text-center py-1 px-3 capitalize cursor-pointer inline-block w-auto"
            >
              all
            </button>
            <button
              class="rounded-full mx-1 border-gray-200 border text-gray-500 text-center py-1 px-3 cursor-pointer inline-block"
            >
              newest
            </button>
            <button
              class="rounded-full mx-1 border-gray-200 border text-gray-500 text-center py-1 px-3 cursor-pointer inline-block"
            >
              oldest
            </button>
            <button
              v-for="n in 5"
              :key="n"
              class="rounded-full mx-1 border-gray-200 border text-gray-500 text-center py-1 px-3 cursor-pointer inline-block"
            >
              <v-icon name="fa-star" fill="orange" />
              {{ n }}
            </button>
          </div>
        </section>
        <section class="flex flex-col gap-8 mt-10">
          <AppReviews v-for="n in 5" :key="n" />
        </section>
      </section>
    </article>
  </main>
</template>
