<template>
  <main>
    <h1>{{ event.title.rendered }}</h1>
    <!-- <small>{{ event.date | dateformat }}</small> -->
    <section v-html="event.content.rendered"></section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },

  computed: {
    events() {
      return this.$store.state.events;
    },

    event() {
      return this.events.find((event) => event.slug === this.slug);
    },
  },

  created() {
    this.$store.dispatch('getEvents');
  },

  head() {
    return {
      title: `Midwest Design Week | ${this.event}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.event} information`,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
