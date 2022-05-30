<script setup lang="ts">

import { Ref, ref, useAttrs } from 'vue'
import { useForm } from '~/composables/useForm'

defineProps<{
  slot?: string,
  class?: string
  dataOffCanvasMainCanvas?: string
}>()

const button = ref<HTMLButtonElement|HTMLAnchorElement>()
const attrs = useAttrs()
const tag = attrs.href ? 'a' : 'button'

const { submit } = useForm(button as Ref<HTMLButtonElement>)

const handleSubmit = () => {
  button.value && tag === 'button' && attrs.type === 'submit' && submit(button.value as HTMLButtonElement)
}

const handleFocus = () => {
  console.log('focus')
}
</script>

<template>
  <component :is="tag" v-bind="attrs" ref="button" @click="handleSubmit" @focus="handleFocus" class="border border-transparent rounded font-medium bg-indigo-600 shadow-sm text-xs text-white py-2 px-4 inline-flex items-center" hover="bg-indigo-700" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 >
    {{ attrs.value }}
    <slot></slot>
  </component>
</template>

<style lang="postcss">
@unocss-placeholder

</style>
