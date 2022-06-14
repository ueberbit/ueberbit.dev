<script setup lang="ts">
import { useMenu } from '~/composables/useDrupal'

const menuItems = useMenu('main')
</script>

<template>
  <nav>
    <ol flex gap-4>
      <li v-for="(menuItem, idx) in menuItems" :key="idx" p-4>
        <a :href="menuItem.absolute">{{ menuItem.title }}</a>
      </li>
    </ol>
  </nav>
</template>

<style>
@unocss-placeholder {
}
</style>
