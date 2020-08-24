<template>
  <div>
    <h1
      class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-12 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto"
    >
      Sponsors_
    </h1>
    <section class="px-6 py-4 lg:py-10">
      <div class="lg:max-w-screen-lg mx-auto grid gap-x-6 gap-y-12 lg:grid-cols-3">
        <div v-for="sponsor in sponsors" :key="sponsor.id">
          <!-- <h3>
            <a :href="`${sponsor.acf.url}`">{{ sponsor.title.rendered }}</a>
          </h3> -->
          <a :href="`${sponsor.acf.url}`">
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Sponsors',

  transition: {
    enterActiveClass: 'animated fadeInUp fast',
    enterLeaveClass: 'animated fadeOutUp fast',
  },

  computed: {
    ...mapState(['sponsors']),
  },

  created() {
    this.getSponsors();
  },

  methods: {
    ...mapActions(['getSponsors']),
  },

  head() {
    return {
      title: `Midwest Design Week | ${this.name}`,
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
