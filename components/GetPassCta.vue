<template functional>
  <section class="bg-offwhite-dark px-6 py-4 lg:py-10">
    <p class="text-center lg:text-2xl font-mono">
      Get your All Access Pass
      <a
        :href="props.buttonLink"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-sm lg:btn bg-blue hover:bg-blue-dark ml-2"
        >Purchase Now</a
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
  },
};
</script>

<style lang="postcss" scoped></style>
