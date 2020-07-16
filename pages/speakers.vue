<template>
  <main class="p-4 max-w-screen-xl mx-auto">
    <div v-for="speaker in speakers" :key="speaker.id">
      <h3>
        <a :href="`${speaker.acf.url}`">{{ speaker.title.rendered }}</a>
      </h3>
      <a :href="`${speaker.acf.url}`">
        <img :src="speaker.acf.image.sizes.large" alt="speaker.acf.image.alt" />
      </a>
      <div>
        Speaker: <strong>{{ speaker.acf.speaker }}</strong>
      </div>
      <div v-html="speaker.content.rendered"></div>
      <a :href="`speakers/${speaker.slug}`">More Info ⟶</a>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Speakers',

  computed: {
    ...mapState(['speakers']),
  },

  created() {
    this.getSpeakers();
  },

  methods: {
    ...mapActions(['getSpeakers']),
  },

  head() {
    return {
      title: `Midwest Design Week | ${this.name}`,
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
