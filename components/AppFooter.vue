<template>
  <footer :class="{ 'bg-black': !bgTransparent }">
    <div class="container mx-auto p-4 lg:px-8">Footer</div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    bgTransparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
