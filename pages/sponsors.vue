<template>
  <div>
    <h1
      class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-12 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto"
    >
      Sponsors_
    </h1>
    <section class="px-6 pt-4 pb-8 lg:pt-10 lg:pb-20">
      <h2 class="text-xl uppercase lg:text-3xl text-center mb-6 lg:mb-16">Premier</h2>
      <div class="lg:max-w-screen-lg mx-auto grid items-center gap-x-8 gap-y-12 lg:grid-cols-2">
        <div
          v-for="sponsor in premier"
          :key="sponsor.id"
          class="transform hover:scale-105 transition-transform duration-300"
        >
          <!-- <h3>
            <a :href="`${sponsor.acf.url}`">{{ sponsor.title.rendered }}</a>
          </h3> -->
          <a v-if="sponsor.acf.url" :href="sponsor.acf.url">
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
          </a>
          <img v-else :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
        </div>
      </div>
    </section>

    <section class="px-6 pt-4 pb-8 lg:pt-10 lg:pb-20">
      <h2 class="text-xl uppercase lg:text-3xl text-center mb-6 lg:mb-16">Event</h2>
      <div
        class="lg:max-w-screen-lg mx-auto grid items-center gap-x-6 gap-y-12 grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="sponsor in event"
          :key="sponsor.id"
          class="transform hover:scale-105 transition-transform duration-300"
        >
          <!-- <h3>
            <a :href="`${sponsor.acf.url}`">{{ sponsor.title.rendered }}</a>
          </h3> -->
          <a v-if="sponsor.acf.url" :href="sponsor.acf.url">
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
          </a>
          <img v-else :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
        </div>
      </div>
    </section>

    <section class="px-6 pt-4 pb-8 lg:pt-10 lg:pb-20">
      <h2 class="text-xl uppercase lg:text-3xl text-center mb-6 lg:mb-16">Supporting</h2>
      <div
        class="lg:max-w-screen-lg mx-auto grid items-center gap-x-6 gap-y-12 grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="sponsor in supporting"
          :key="sponsor.id"
          class="transform hover:scale-105 transition-transform duration-300"
        >
          <!-- <h3>
            <a :href="`${sponsor.acf.url}`">{{ sponsor.title.rendered }}</a>
          </h3> -->
          <a v-if="sponsor.acf.url" :href="sponsor.acf.url">
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
          </a>
          <img v-else :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
        </div>
      </div>
    </section>

    <section class="px-6 pt-4 pb-8 lg:pt-10 lg:pb-20">
      <h2 class="text-xl uppercase lg:text-3xl text-center mb-6 lg:mb-16">In-Kind</h2>
      <div
        class="lg:max-w-screen-lg mx-auto grid items-center gap-x-6 gap-y-12 grid-cols-3 lg:grid-cols-5"
      >
        <div
          v-for="sponsor in inKind"
          :key="sponsor.id"
          class="transform hover:scale-105 transition-transform duration-300"
        >
          <!-- <h3>
            <a :href="`${sponsor.acf.url}`">{{ sponsor.title.rendered }}</a>
          </h3> -->
          <a v-if="sponsor.acf.url" :href="sponsor.acf.url">
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
          </a>
          <img v-else :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
        </div>
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Sponsors',

  components: {
    AppFooter,
  },

  computed: {
    ...mapState(['sponsors']),

    premier() {
      return this.sponsors.filter((sponsor) => sponsor.acf.level === 'Premier');
    },

    event() {
      return this.sponsors.filter((sponsor) => sponsor.acf.level === 'Event');
    },

    supporting() {
      return this.sponsors.filter((sponsor) => sponsor.acf.level === 'Supporting');
    },

    inKind() {
      return this.sponsors.filter((sponsor) => sponsor.acf.level === 'In-Kind');
    },
  },

  created() {
    this.getSponsors();
    // this.getOptions();
  },

  methods: {
    ...mapActions(['getSponsors', 'getOptions']),
  },

  head() {
    return {
      title: `Midwest Design Week | Sponsors`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'List of Sponsors for Midwest Design Week 2020',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
