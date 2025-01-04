<script setup lang="ts">
// Import Store data
import { useUserReviewsStore } from '@/features/reviews/stores/userReviews'
import { useProductDataStore } from '@/features/product/stores/product'

// Import product-related components
import ProductCard from '@/features/product/components/ProductCard.vue'
import ProductData from '@/features/product/components/ProductData.vue'

// Import review-related components
import UserReviews from '@/features/reviews/components/UserReviews.vue'
import ReviewFilters from '@/features/reviews/components/ReviewFilters.vue'
import ReviewModal from '@/features/reviews/components/ReviewModal.vue'

// Import shared UI components
import AppSecondaryButton from '@/components/AppSecondaryButton.vue'

import { storeToRefs } from 'pinia'
import type { UserReviewItem } from '@/features/reviews/types/userReview'

const { productData } = useProductDataStore()
const store = useUserReviewsStore()
const { userReviewsData , totalReviews } = storeToRefs(store)
const { nextPage } = store
const { image, ...productInfo } = productData
</script>

<template>
  <!-- Main container with responsive grid layout -->
  <main id="product-container">
    <!-- Product image section -->
    <aside id="product-image">
      <ProductCard :image="image" />
    </aside>
    <!-- Product details and reviews section-->
    <article id="product-details">
      <!-- Product information section -->
      <section>
        <ProductData v-bind="productInfo" :total-reviews="totalReviews" />
      </section>

      <!-- Reviews section -->
      <section>
        <!-- Reviews header with title, counter, and action buttons -->
        <header id="reviews-header">
          <h4 id="reviews-title">
            Reviews <span class="font-normal">({{ totalReviews }})</span>
          </h4>
          <AppSecondaryButton @click="nextPage">see more</AppSecondaryButton>
          <!-- Modal container -->
          <div id="reviews-modal-container">
            <ReviewModal />
          </div>
        </header>

        <!-- Reviews filters section - horizontally scrollable on mobile -->
        <section id="reviews-filters">
          <ReviewFilters />
        </section>

        <!-- User reviews list -->

        <section id="user-reviews">
          <UserReviews
            v-for="userReview in userReviewsData"
            :key="userReview.id"
            v-bind="userReview"
          />
        </section>
      </section>
    </article>
  </main>
</template>

<style scoped>
#user-reviews {
  @apply flex flex-col gap-8 mt-10;
}

#reviews-filters {
  @apply overflow-x-auto w-[calc(100vw-3rem)] lg:w-auto h-14 overflow-y-hidden py-2 whitespace-nowrap;
}

#reviews-modal-container {
  @apply bg-white lg:bg-transparent shadow-xl lg:shadow-none shadow-black w-full lg:w-auto lg:static fixed bottom-0 left-0 h-auto py-6 lg:p-0 px-4 flex items-end;
}

#reviews-header {
  @apply flex items-center justify-between mt-10 mb-2 gap-5 flex-wrap;
}

#product-details {
  @apply col-span-12 lg:col-span-8;
}

#product-image {
  @apply col-span-12 lg:col-span-4;
}

#product-container {
  @apply grid grid-cols-12 gap-5;
}

#reviews-title{
  @apply text-lg font-bold flex-grow
}
</style>
