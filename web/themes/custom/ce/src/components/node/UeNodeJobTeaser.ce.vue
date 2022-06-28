<script setup lang="ts">
import { useSlots } from '~/composables/useCE'

defineProps<{
  title: string
  url: string
  viewMode: 'full' | 'teaser'
  bundle: string
}>()

const slots = useSlots()

</script>

<template>
<article bg-white opacity-90 shadow-md rounded relative px-11 grid content-center auto-rows-min>

  <div class="badge">
    Jobs
  </div>

  <div v-if="'changed' in slots" text-xs italic>
    <slot name="changed"></slot>
  </div>

  <div v-if="'title' in slots" text-xl font-bold>
    <slot name="title"></slot>
  </div>

  <div v-if="'teaser_text' in slots" font-light line-clamp-3>
    <slot name="teaser_text"></slot>
  </div>

  <ue-button :href="url">more</ue-button>
</article>
</template>

<style>
@unocss-placeholder;

.badge {
  @apply bg-#FBFE7B text-xs font-bold p-4 absolute -top-2 left-11;
}

/* [name="changed"] {
  @apply text-xs italic;
} */

article {
  width: 330px;
  height: 330px;
  margin: 1rem;
}
</style>
