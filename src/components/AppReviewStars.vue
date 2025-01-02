<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    readonly?: boolean
  }>(),
  {
    readonly: false,
  },
)

const model = defineModel<number>({
  default: 0,
})

const setFillColor = (star: number) => {
  return model.value >= star ? 'orange' : 'lightGray'
}

const update = (star: number) => {
  if (props.readonly) return
  model.value = star
}
</script>

<template>
  <div>
    <v-icon
      v-for="n in 5"
      :key="n"
      name="fa-star"
      :fill="setFillColor(n)"
      @click="update(n)"
      :class="['review-star', { 'review-star--readonly': props.readonly }]"
    />
  </div>
</template>

<style scoped>
.review-star {
  @apply w-9 h-8 cursor-pointer hover:scale-125 transition-all;
}

.review-star--readonly {
  @apply w-auto h-auto hover:scale-100 cursor-default;
}
</style>
