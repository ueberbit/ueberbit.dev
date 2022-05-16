<script setup lang="ts">
import Abc from './Abc.vue'

defineProps<{
  slot?: string,
  class?: string
  dataOffCanvasMainCanvas?: string
}>()
</script>

<template>
  <Abc/>
  <div class="bg-purple-600">
    hi
  </div>
  <slot name="header"></slot>
  <slot name="breadcrumb"></slot>
  <slot name="highlighted"></slot>
  <slot name="main"></slot>
  <slot>
    hi
  </slot>
</template>

<style lang="postcss">
@unocss-placeholder

</style>
