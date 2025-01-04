import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductDataStore = defineStore('productDataStore', () => {
  const productData = {
    title: 'Dr Crz Jacket',
    category: 'leather jacket',
    description:
      'The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail The \"DR CRZ Jacket\" is a stylish and versatile piece of outerwear designed to provide both fashion and functionality. Crafted with attention to detail',
    price: 69,
    avgNumberReview: 4.5,
    image: '/dr-crz-jacket.png',
  }

  return { productData }
})
