<script setup lang="ts">
import { useAttrs } from 'vue'
import AppErrorMsg from './AppErrorMsg.vue'
import type { AppInput } from '@/types/AppInput'
import { useField } from 'vee-validate'
const attrs = useAttrs()
const { id, name } = attrs as unknown as AppInput

const { value, errorMessage } = useField<string>(() => name)
</script>

<template>
  <div>
    <label :for="id">{{ name }}</label>
    <input v-bind="$attrs" v-model="value" class="text-input" />
    <AppErrorMsg v-show="errorMessage" :errorMessage />
  </div>
</template>

<style scoped>
.text-input {
  @apply w-full border border-gray-200 rounded-md p-2 mt-1;
}
</style>
