<template>
  <div>
    <h1
      class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-12 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto"
    >
      MWDW Speakers_
    </h1>

    <section class="px-6 py-4 lg:py-10">
      <div class="lg:max-w-screen-lg mx-auto grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="speaker in sortedSpeakers"
          :key="speaker.id"
          class="transform hover:scale-105 transition-transform duration-300"
        >
          <nuxt-link :to="`/speakers/${speaker.slug}`">
            <img
              :src="speaker.acf.image.sizes.large"
              :alt="speaker.acf.image.alt"
              class="w-64 lg:w-80 h-64 lg:h-80 mb-3 object-cover"
            />
          </nuxt-link>
          <h3 class="font-mono text-2xl lg:text-3xl">
            <nuxt-link :to="`/speakers/${speaker.slug}`"> {{ speaker.title.rendered }}_ </nuxt-link>
          </h3>
          <h4 class="font-mono font-normal text-lg lg:text-xl">
            {{ speaker.acf.job_title }}
          </h4>
        </div>
      </div>
    </section>

    <cta-section :button-link="options.register_link" :external="true" />
  </div>
</template>

<script>
import CtaSection from '@/components/CtaSection';
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'Speakers',

  components: {
    CtaSection,
  },

  computed: {
    ...mapState(['speakers', 'options']),
    ...mapGetters(['sortedSpeakers']),
  },

  created() {
    this.getSpeakers();
    this.getOptions();
    // console.log(this.speakers);
    // console.log(this.sortedSpeakers);
  },

  methods: {
    ...mapActions(['getSpeakers', 'getOptions']),
  },

  head() {
    return {
      title: `Midwest Design Week | Speakers`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'List of Speakers for Midwest Design Week 2020',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
