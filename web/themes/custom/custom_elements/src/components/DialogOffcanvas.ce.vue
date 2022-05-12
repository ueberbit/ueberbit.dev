<script setup lang="ts">

defineProps<{
  slot?: string,
  class?: string
  dataOffCanvasMainCanvas?: string
}>()
</script>

<template>
  <slot name="header"></slot>
  <slot name="breadcrumb"></slot>
  <slot name="highlighted"></slot>
  <slot name="main"></slot>
  <div class="text-red-400">hi there</div>
</template>

<style>

html {
  background: red;
}
@unocss-placeholder;
</style>
