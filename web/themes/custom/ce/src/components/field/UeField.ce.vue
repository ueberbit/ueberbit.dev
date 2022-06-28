<script setup lang="ts">

defineProps<{
  label: string
  labelHidden: boolean
  type: string
}>()

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

  <slot></slot>
</template>

<style lang="postcss">

/* .prose :where(h1,h2,h3,h4,h5,h6):not(.not-prose){
    color:var(--un-prose-headings);
    font-weight:600;
    line-height:1.25;
}
.prose :where(a):not(.not-prose){
    color:var(--un-prose-links);
    text-decoration:underline;
    font-weight:500;
}
.prose :where(a code):not(.not-prose){
    color:var(--un-prose-links);
}
.prose :where(p,ul,ol,pre):not(.not-prose){
    margin:1em 0;
    line-height:1.75;
}
.prose :where(blockquote):not(.not-prose){
    margin:1em 0;
    padding-left:1em;
    font-style:italic;
    border-left:.25em solid var(--un-prose-borders);
}
.prose :where(h1):not(.not-prose){
    margin:1rem 0;
    font-size:2.25em;
}
.prose :where(h2):not(.not-prose){
    margin:1.75em 0 .5em;
    font-size:1.75em;
}
.prose :where(h3):not(.not-prose){
    margin:1.5em 0 .5em;
    font-size:1.375em;
}
.prose :where(h4):not(.not-prose){
    margin:1em 0;
    font-size:1.125em;
}
.prose :where(img,video):not(.not-prose){
    max-width:100%;
}
.prose :where(figure,picture):not(.not-prose){
    margin:1em 0;
}
.prose :where(figcaption):not(.not-prose){
    color:var(--un-prose-captions);
    font-size:.875em;
}
.prose :where(code):not(.not-prose){
    color:var(--un-prose-code);
    font-size:.875em;
    font-weight:600;
    font-family:var(--un-prose-font-mono);
}
.prose :where(:not(pre) > code):not(.not-prose)::before,.prose :where(:not(pre) > code):not(.not-prose)::after{
    content:"`";
}
.prose :where(pre):not(.not-prose){
    padding:1.25rem 1.5rem;
    overflow-x:auto;
    border-radius:.375rem;
}
.prose :where(pre,code):not(.not-prose){
    white-space:pre;
    word-spacing:normal;
    word-break:normal;
    word-wrap:normal;
    -moz-tab-size:4;
    -o-tab-size:4;
    tab-size:4;
    -webkit-hyphens:none;
    -moz-hyphens:none;
    hyphens:none;
    background:transparent;
}
.prose :where(pre code):not(.not-prose){
    font-weight:inherit;
}
.prose :where(ol,ul):not(.not-prose){
    padding-left:1.25em;
}
.prose :where(ol):not(.not-prose){
    list-style-type:decimal;
}
.prose :where(ol[type="A"]):not(.not-prose){
    list-style-type:upper-alpha;
}
.prose :where(ol[type="a"]):not(.not-prose){
    list-style-type:lower-alpha;
}
.prose :where(ol[type="A" s]):not(.not-prose){
    list-style-type:upper-alpha;
}
.prose :where(ol[type="a" s]):not(.not-prose){
    list-style-type:lower-alpha;
}
.prose :where(ol[type="I"]):not(.not-prose){
    list-style-type:upper-roman;
}
.prose :where(ol[type="i"]):not(.not-prose){
    list-style-type:lower-roman;
}
.prose :where(ol[type="I" s]):not(.not-prose){
    list-style-type:upper-roman;
}
.prose :where(ol[type="i" s]):not(.not-prose){
    list-style-type:lower-roman;
}
.prose :where(ol[type="1"]):not(.not-prose){
    list-style-type:decimal;
}
.prose :where(ul):not(.not-prose){
    list-style-type:disc;
}
.prose :where(ol > li):not(.not-prose)::marker,.prose :where(ul > li):not(.not-prose)::marker,.prose :where(summary):not(.not-prose)::marker{
    color:var(--un-prose-lists);
}
.prose :where(hr):not(.not-prose){
    margin:2em 0;
    border:1px solid var(--un-prose-hr);
}
.prose :where(table):not(.not-prose){
    display:block;
    margin:1em 0;
    border-collapse:collapse;
    overflow-x:auto;
}
.prose :where(tr):not(.not-prose):nth-child(2n){
    background:var(--un-prose-bg-soft);
}
.prose :where(td,th):not(.not-prose){
    border:1px solid var(--un-prose-borders);
    padding:.625em 1em;
}
.prose :where(abbr):not(.not-prose){
    cursor:help;
}
.prose :where(kbd):not(.not-prose){
    color:var(--un-prose-code);
    border:1px solid;
    padding:.25rem .5rem;
    font-size:.875em;
    border-radius:.25rem;
}
.prose :where(details):not(.not-prose){
    margin:1em 0;
    padding:1.25rem 1.5rem;
    background:var(--un-prose-bg-soft);
}
.prose :where(summary):not(.not-prose){
    cursor:pointer;
    font-weight:600;
}
.prose{
    color:var(--un-prose-body);
    max-width:65ch;
} */
</style>
