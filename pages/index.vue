<template>
  <div>
    <app-hero></app-hero>

    <main class="p-4 max-w-screen-xl mx-auto">
      <div v-for="event in events" :key="event.id">
        <h3>
          <a :href="`${event.acf.url}`" target=" _blank" rel="noopener noreferrer">{{
            event.title.rendered
          }}</a>
        </h3>
        <!-- <small>{{ event.date | dateformat }}</small> -->
        <a :href="`${event.acf.url}`" target=" _blank" rel="noopener noreferrer">
          <img :src="event.acf.image.sizes.large" alt="event.acf.image.alt" />
        </a>
        <div>
          Speaker: <strong>{{ event.acf.speaker }}</strong>
        </div>
        <div>{{ event.acf.description }}</div>
        <a :href="`events/${event.slug}`">Get Info</a>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppHero from '@/components/AppHero.vue';

export default {
  components: {
    AppHero,
  },

  data() {
    return {
      // selectedTag: null,
      // activeClass: 'active',
    };
  },

  computed: {
    ...mapState(['events']),

    // tags() {
    //   return this.$store.state.tags;
    // },
    // sortedEvents() {
    //   if (!this.selectedTag) return this.events;
    //   return this.events.filter((el) => el.tags.includes(this.selectedTag));
    // },
  },

  created() {
    this.getEvents();
  },

  methods: {
    ...mapActions(['getEvents']),

    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id;
      } else {
        this.selectedTag = null;
      }
    },
  },
};
</script>

<style lang="postcss"></style>
