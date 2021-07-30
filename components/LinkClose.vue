<template functional>
  <nuxt-link :to="props.toRoute" aria-label="close">
    <SvgClose aria-hidden="true" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'LinkClose',
  props: {
    toRoute: {
      type: String,
      required: true,
    },
  },
};
</script>
