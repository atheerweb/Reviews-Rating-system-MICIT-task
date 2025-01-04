<script setup lang="ts">
import { comma } from 'postcss/lib/list'
import { computed } from 'vue'

const props = defineProps<{
  totalPages: number
}>()

const model = defineModel({ default: 1 })

const MinPage = computed(() => model.value <= 1)

const MaxPage = computed(() => model.value === props.totalPages)

const startNumber = computed(() => (MaxPage.value ? 1 : model.value))

const update = (number: number) => {
  model.value = number
}

const decrement = () => {
  if (MinPage.value) return model.value

  return model.value - 1
}

const increment = () => {
  if (MaxPage.value) return model.value

  return model.value + 1
}

const isActiveColor = (number: number) => {
  if (model.value === number) return 'pagination-button--active'
}
</script>
<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px text-sm">
      <li>
        <button
          class="pagination-button pagination-button--next"
          :disabled="MinPage"
          @click="update(decrement())"
        >
          Previous
        </button>
      </li>
      <li>
        <a :class="['pagination-button', isActiveColor(startNumber)]" @click="update(startNumber)">
          {{ startNumber }}
        </a>
      </li>

      <li>
        <a class="pagination-button">...</a>
      </li>

      <li>
        <a :class="['pagination-button', isActiveColor(totalPages)]" @click="update(totalPages)">
          {{ totalPages }}
        </a>
      </li>

      <li>
        <button
          class="pagination-button pagination-button--previous"
          :disabled="MaxPage"
          @click="update(increment())"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination-button {
  @apply flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 cursor-pointer text-gray-600 bg-white disabled:opacity-40 disabled:cursor-default;
}
.pagination-button--next {
  @apply rounded-s-full lg:rounded-s-md;
}

.pagination-button--active {
  @apply bg-zinc-950 text-white;
}

.pagination-button--previous {
  @apply rounded-e-full lg:rounded-e-md;
}
</style>
