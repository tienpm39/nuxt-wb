<template>
  <component :is="type" :href="href" class="button">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    }
  }
};
</script>

<style scoped>
.button {
  @apply inline-block my-2 mx-0 py-2 min-w-1 bg-white border-primary border rounded-lg text-primary text-xs font-semibold tracking-widest leading-none uppercase cursor-pointer transition;
}
.button:hover {
  @apply bg-primary text-white;
}
</style>
