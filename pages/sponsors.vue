<template>
  <main class="p-4 max-w-screen-xl mx-auto">
    <div v-for="sponsor in sponsors" :key="sponsor.id">
      <!-- <h3>
        <a :href="`${sponsor.acf.url}`">{{ sponsor.title.rendered }}</a>
      </h3> -->
      <a :href="`${sponsor.acf.url}`">
        <img :src="sponsor.acf.image.sizes.large" alt="sponsor.acf.image.alt" />
      </a>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Sponsors',

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
