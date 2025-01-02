<script setup lang="ts">
import { useUserReviewsStore } from '@/features/reviews/stores/userReviews'
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

// Mock product data object containing product details and review statistics
const productData = {
  title: 'Dr Crz Jacket',
  category: 'leather jacket',
  description:
    'The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail',
  price: 69,
  totalReviews: 5,
  avgNumberReview: 4.5,
}

const store = useUserReviewsStore()
const { userReviewsData } = storeToRefs(store)
const { nextPage } = store
</script>

<template>
  <!-- Main container with responsive grid layout -->
  <main id="product-container">
    <!-- Product image section -->
    <aside id="product-image">
      <ProductCard image="/dr-crz-jacket.png" />
    </aside>
    <!-- Product details and reviews section-->
    <article id="product-details">
      <!-- Product information section -->
      <section>
        <ProductData v-bind="productData" />
      </section>

      <!-- Reviews section -->
      <section>
        <!-- Reviews header with title, counter, and action buttons -->
        <header id="reviews-header">
          <h4 class="text-lg font-bold flex-grow">
            Reviews <span class="font-normal">({{ productData.totalReviews }})</span>
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
</style>
