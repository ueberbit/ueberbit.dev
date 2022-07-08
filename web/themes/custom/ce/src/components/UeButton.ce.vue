<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, useAttrs } from 'vue'
import { useForm } from '~/composables/useForm'

defineProps<{
  slot?: string
  class?: string
  dataOffCanvasMainCanvas?: string
}>()

const button = ref<HTMLButtonElement | HTMLAnchorElement>()
const attrs = useAttrs()
const tag = attrs.href ? 'a' : 'button'

const { submit } = useForm(button as Ref<HTMLButtonElement>)

const handleSubmit = () => {
  button.value &&
    tag === 'button' &&
    attrs.type === 'submit' &&
    submit(button.value as HTMLButtonElement)
}
</script>

<template>
  <component
    :is="tag"
    v-bind="attrs"
    ref="button"
    class="border border-transparent rounded font-medium bg-indigo-600 shadow-sm text-xs text-white py-2 px-4 inline-flex items-center focus:(outline-none ring-2 ring-offset-2 ring-indigo-500)"
    hover="bg-indigo-700"
    @click="handleSubmit"
  >
    {{ attrs.value }}
    <slot></slot>
  </component>
</template>

<style>
@unocss-placeholder;
</style>
