<template functional>
  <section class="bg-offwhite-dark px-6 py-4 lg:py-10">
    <p class="text-center lg:text-2xl font-mono">
      {{ props.text }}
      <a
        :href="props.buttonLink"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-sm lg:btn bg-blue hover:bg-blue-dark ml-2"
        >{{ props.buttonText }}</a
      >
    </p>
  </section>
</template>

<script>
export default {
  props: {
    buttonLink: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: 'Get your All Access Pass',
    },
    buttonText: {
      type: String,
      default: 'Purchase Now',
    },
  },
};
</script>

<style lang="postcss" scoped></style>
