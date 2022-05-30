<script setup lang="ts">

import { ref, useAttrs } from 'vue'
import { useForm } from '~/composables/useForm'

const attrs = useAttrs()
const input = ref<HTMLInputElement>()

defineProps<{
  slot?: string,
  class?: string
  dataOffCanvasMainCanvas?: string
}>()

useForm(input)

</script>

<template>
  <input ref="input" v-bind="attrs"/>
  <slot></slot>
</template>

<style lang="postcss">
@unocss-placeholder

</style>
