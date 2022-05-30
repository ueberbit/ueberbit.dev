<script setup lang="ts">

defineProps<{
  slot?: string,
  class?: string
}>()

</script>

<template>
  <h1 class="text-xl text-blue-400">This is a normal vue componenet inside a CE</h1>
</template>

<style lang="postcss">
@unocss-placeholder
</style>
