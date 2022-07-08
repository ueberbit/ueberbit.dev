<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHost, useRenderRoot } from '~/composables/useCE'

const props = defineProps<{
  label: string
  labelHidden: boolean
  type: string
}>()

const content = ref<HTMLDivElement>()
const host = useHost()

const isProse = () => {
  if (props.type === 'text_with_summary') {
    return true
  }
  if (props.type === 'text_long') {
    return true
  }
  return false
}

onMounted(() => {
  if (isProse()) {
    content.value?.append(...Array.from(host.childNodes).map(node => node.cloneNode(true)))
  }
})


</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div v-if="!labelHidden">
    {{ label }}
  </div>
  <div ref="content" :class="{ 'prose prose-slate': isProse() }">
    <slot v-if="!isProse()"></slot>
  </div>
</template>

<style>
@unocss-placeholder;

.prose {
  --un-prose-pre-bg: #1e293b;
  --un-prose-pre-code: #e2e8f0;
}
</style>
