<script setup lang="ts">
import ProductCard from '@/features/product/components/ProductCard.vue';
import ProductData from '@/features/product/components/ProductData.vue';
import AppReviews from '@/features/reviews/components/UserReviews.vue';
import ProductReviewForm from '@/features/reviews/components/ProductReviewForm.vue';




const productData = {
  title: 'Dr Crz Jacket',
  category: 'leather jacket',
  description:
    'The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail',
  price: 69,
  totalReviews: 5,
  avgNumberReview: 4.5,
}
</script>

<template>
  <main class="grid grid-cols-12 gap-5">
    <aside class="col-span-12 lg:col-span-4">
      <ProductCard image="/dr-crz-jacket.png" />
    </aside>
    <article class="col-span-12 lg:col-span-8">
      <section>
        <ProductData v-bind="productData" />
      </section>

      <section class="fixed w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0">
        <ProductReviewForm />
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
            class="bg-white lg:bg-transparent shadow-xl lg:shadow-none shadow-black w-full lg:w-auto lg:static fixed bottom-0 left-0 h-auto py-6 lg:p-0 px-4 flex items-end"
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
