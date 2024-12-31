<script setup lang="ts"></script>

<template>
  <main class="flex flex-col items-center lg:flex-row lg:gap-10 lg:items-start">
    <div class="w-full bg-[#F2F2F2] p-5 rounded-xl min-h-60">
      <img src="/dr-crz-jacket.png" alt="pizza" title="pizza" class="w-full max-w-[400px] lg:w-[400px] m-auto" />
    </div>
    <section>
      <h1 class="mt-5 font-bold text-xl lg:text-2xl">DR CRZ Jacket</h1>
      <p class="text-gray-400 capitalize mt-1">leather jacket</p>

      <div class="flex gap-1 items-center mt-2">
        <v-icon v-for="n in 5" :key="n" name="fa-star" fill="orange" />
        <strong>4.9</strong>
        <span class="text-gray-400"> (1.2k Reviews)</span>
      </div>
      <h2 class="text-3xl mt-5 font-bold">$69.00</h2>

      <h4 class="text-lg font-bold mt-10 mb-2">Description</h4>
      <p class="text-gray-400">
        The "DR CRZ Jacket" is a stylish and versatile piece of outerwear designed to provide both
        fashion and functionality. Crafted with attention to detail The "DR CRZ Jacket" is a stylish
        and versatile piece of outerwear designed to provide both fashion and functionality. Crafted
        with attention to detail The "DR CRZ Jacket" is a stylish and versatile piece of outerwear
        designed to provide both fashion and functionality. Crafted with attention to detail The "DR
        CRZ Jacket" is a stylish and versatile piece of outerwear designed to provide both fashion
        and functionality. Crafted with attention to detail
      </p>
      <h4 class="text-lg font-bold mt-10 mb-2">Reviews (1349)</h4>
    </section>
  </main>
</template>
