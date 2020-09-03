<template>
  <div>
    <h1
      class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-12 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto"
    >
      {{ codeOfConduct.title.rendered }}
    </h1>
    <section class="px-6 lg:px-0 py-4 mb-10 md:mb-20 lg:max-w-screen-lg mx-auto">
      <div class="max-w-screen-md text-lg page-content" v-html="codeOfConduct.content.rendered" />
    </section>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'CodeofConduct',

  components: {
    AppFooter,
  },

  computed: {
    ...mapState(['pages']),

    codeOfConduct() {
      return this.pages.find((page) => page.slug === 'code-of-conduct');
    },
  },

  created() {
    this.getSponsors();
    this.getOptions();
    console.log(this.codeOfConduct);
  },

  methods: {
    ...mapActions(['getSponsors', 'getOptions']),
  },

  head() {
    return {
      title: `Midwest Design Week | Code of Conduct`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Code of Conduct for Midwest Design Week 2020',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
