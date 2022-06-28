<script setup lang="ts">
import Menu from './Menu.vue'

defineProps<{
  class?: string
  basePath?: string
  loggedIn?: boolean
  isAdmin?: boolean
  isFront?: boolean
}>()

</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <header role="banner">
    <Menu />
  </header>
  <div class="bg-purple-300">
    hi
  </div>
  <slot name="header"></slot>
  <slot name="breadcrumb"></slot>
  <slot name="highlighted"></slot>
  <slot name="main"></slot>
  <slot>
    hi
  </slot>
  <slot name="footer"></slot>
</template>

<style>
@unocss-placeholder;

::slotted(main) {
  flex-grow: 1;
}

:host {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--ginToolbarSecondaryHeight) - 1px);
}
</style>
