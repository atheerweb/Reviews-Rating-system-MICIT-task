<script setup lang="ts">
import { useField } from 'vee-validate'
import AppErrorMsg from './AppErrorMsg.vue'

const props = withDefaults(
  defineProps<{
    readonly?: boolean
    name?: string
    modelValue: number
  }>(),
  {
    readonly: false,
    name: '',
  },
)

const setDefaultValue = () => {
  if (props.modelValue) {
    value.value = props.modelValue
  }
}

const { value, errorMessage } = useField<number>(() => props.name)

setDefaultValue()

const setFillColor = (star: number) => {
  return value.value >= star ? 'orange' : 'lightGray'
}

const update = (star: number) => {
  if (props.readonly) return
  value.value = star
}
</script>

<template>
  <div>
    <label v-if="props.name" :for="props.name" class="block">{{ props.name }}</label>
    <v-icon
      v-for="n in 5"
      :key="n"
      name="fa-star"
      :fill="setFillColor(n)"
      @click="update(n)"
      :class="['review-star', { 'review-star--readonly': props.readonly }]"
    />
    <AppErrorMsg v-show="errorMessage" :errorMessage />
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
