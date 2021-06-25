<template>
  <div>
    <h1 class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-12 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto">
      {{ page.title.rendered }}
    </h1>
    <section class="px-6 lg:px-0 py-4 mb-10 md:mb-20 lg:max-w-screen-lg mx-auto">
      <div class="max-w-screen-md text-lg page-content" v-html="page.content.rendered" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Page',

  data() {
    return {
      slug: this.$route.params.slug,
    };
  },

  head() {
    return {
      title: `Midwest Design Week | ${this.page.title.rendered}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.page.title.rendered} for Midwest Design Week 2021`,
        },
      ],
    };
  },

  computed: {
    ...mapState(['pages']),

    page() {
      return this.pages.find((page) => page.slug === this.slug);
    },
  },

  created() {
    this.getPages();
    this.getOptions();
    // console.log(this.page);
  },

  methods: {
    ...mapActions(['getPages', 'getOptions']),
  },
};
</script>

<style lang="postcss" scoped></style>
