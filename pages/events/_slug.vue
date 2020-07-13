<template>
  <main class="event individual">
    <h1>{{ event.title.rendered }}</h1>
    <!-- <small class="date">{{ event.date | dateformat }}</small> -->
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
};
</script>

<style lang="scss" scoped>
main.event {
  margin: 60px auto 50px;
  max-width: 800px;
  padding: 0 30px 70px;
}

h1 {
  color: black;
  font-size: 40px;
}

section {
  color: #444;
}

.date {
  text-align: center;
}
</style>
