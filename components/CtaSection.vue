<template functional>
  <section class="bg-offwhite-dark px-6 py-4 lg:py-10">
    <p class="text-center lg:text-2xl font-mono leading-loose">
      {{ props.text }}
      <a
        v-if="props.external"
        :href="props.buttonLink"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-sm lg:btn bg-blue hover:bg-blue-dark ml-2"
      >
        {{ props.buttonText }}
      </a>
      <nuxt-link
        v-else
        :to="props.buttonLink"
        class="btn-sm lg:btn bg-blue hover:bg-blue-dark ml-2"
      >
        {{ props.buttonText }}
      </nuxt-link>
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
    external: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
