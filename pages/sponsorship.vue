<template>
  <div>
    <h1
      class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-12 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto"
    >
      Sponsors_
    </h1>
    <section class="px-6 pt-4 pb-8 lg:pt-10 lg:pb-12">
      <div
        class="lg:max-w-screen-lg mx-auto flex flex-wrap items-center justify-around mb-6 lg:mb-16"
      >
        <div
          v-for="sponsor in sortedSponsors"
          :key="sponsor.id"
          class="transform hover:scale-105 transition-transform duration-300 w-1/2 md:w-1/4 p-4"
        >
          <a
            v-if="sponsor.acf.url"
            :href="sponsor.acf.url"
            target=" _blank"
            rel="noopener noreferrer"
          >
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
          </a>
          <img v-else :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
        </div>
      </div>
    </section>
    <section class="px-6 pt-4 pb-8 lg:pt-10 lg:pb-12">
      <h2 class="text-xl uppercase lg:text-3xl text-center mb-6 lg:mb-16">Sponsorship Info</h2>
      <div
        class="lg:max-w-screen-lg mx-auto text-base md:text-lg page-content mb-12 md:mb-16"
        v-html="sponsorship.content.rendered"
      />
      <p class="lg:max-w-screen-lg mx-auto text-xl">
        <span class="font-bold">
          For additional information, check out our
          <a href="/MWDW_2020_Sponsorship.pdf" target="_blank" rel="noopener noreferrer"
            >Sponsorship Packet.</a
          >
        </span>
        <br />
        <br />
        If interested or if you have questions, contact
        <a href="mailto:nicola@aigacincinnati.org">Nicola Cimino.</a>
      </p>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'Sponsorship',

  computed: {
    ...mapState(['sponsors', 'pages']),

    ...mapGetters(['sortedSponsors']),

    sponsorship() {
      return this.pages.find((page) => page.slug === 'sponsorship');
    },

    // premier() {
    //   return this.sponsors.filter((sponsor) => sponsor.acf.level === 'Premier');
    // },

    // event() {
    //   return this.sponsors.filter((sponsor) => sponsor.acf.level === 'Event');
    // },

    // supporting() {
    //   return this.sponsors.filter((sponsor) => sponsor.acf.level === 'Supporting');
    // },

    // inKind() {
    //   return this.sponsors.filter((sponsor) => sponsor.acf.level === 'In-Kind');
    // },
  },

  created() {
    this.getSponsors();
    this.getOptions();
  },

  methods: {
    ...mapActions(['getSponsors', 'getOptions']),
  },

  head() {
    return {
      title: `Midwest Design Week | Sponsorship`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sponsorship information for Midwest Design Week 2020',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
