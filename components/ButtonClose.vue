<template>
  <button aria-label="close" :class="`w-${wide}`" @click="$emit('clicked')">
    <SvgClose />
  </button>
</template>

<script>
export default {
  name: 'ButtonClose',
  props: {
    wide: {
      type: String,
      default: '8',
    },
  },
};
</script>
