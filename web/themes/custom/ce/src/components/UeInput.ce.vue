<script setup lang="ts">
import { ref, useAttrs } from 'vue'
import { useForm } from '~/composables/useForm'

defineProps<{
  slot?: string
  class?: string
  dataOffCanvasMainCanvas?: string
}>()
const attrs = useAttrs()
const input = ref<HTMLInputElement>()

useForm(input)
</script>

<template>
  <input ref="input" v-bind="attrs" />
  <slot></slot>
</template>
