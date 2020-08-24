<template>
  <section class="p-6 bg-dark text-white">
    <div class="lg:max-w-screen-lg mx-auto lg:flex pb-8 lg:pb-16">
      <div class="lg:w-2/5">
        <img
          :src="speaker.acf.image.sizes.large"
          :alt="speaker.acf.image.alt"
          class="w-auto h-64 lg:w-full lg:h-96 object-cover mb-4 lg:mb-8"
        />
        <section
          class="hidden lg:block leading-relaxed mb-6"
          v-html="speaker.content.rendered"
        ></section>
      </div>

      <div class="lg:w-3/5 lg:pl-8">
        <h1 class="text-2xl lg:text-4xl font-bold font-mono leading-tight">
          {{ speaker.title.rendered }}
        </h1>
        <h2 class="text-xl lg:text-2xl font-normal font-mono leading-tight mb-2 lg:mb-16">
          {{ speaker.acf.job_title }}
        </h2>
        <section class="lg:hidden leading-relaxed mb-6" v-html="speaker.content.rendered"></section>

        <h3 class="lg:text-xl uppercase mb-2">Sessions</h3>
        <div v-for="session in speaker.acf.sessions" :key="session.event.ID" class="font-bold">
          <nuxt-link :to="`/events/${session.event.post_name}`"> </nuxt-link>
          <time class="text-2xl lg:text-3xl font-semibold">
            {{
              $dateFns.format(
                new Date(getMatchingEventInfo(session.event.post_name).acf.start),
                'M/d h:mmaaaaa'
              )
            }}
          </time>
          <h4 class="text-xl font-normal leading-tight mb-3">
            {{ session.event.post_title }}
          </h4>
          <a
            :href="getMatchingEventInfo(session.event.post_name).acf.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-sm lg:btn bg-blue hover:bg-blue-dark mb-8"
          >
            Register
          </a>
          <!-- <h1>{{ getMatchingEventInfo(session.event.post_name).acf.description }}</h1> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Speaker',

  transition: {
    enterActiveClass: 'animated zoomIn fast',
    enterLeaveClass: 'animated zoomOut fast',
  },

  data() {
    return {
      slug: this.$route.params.slug,
    };
  },

  computed: {
    ...mapState(['events']),

    speakers() {
      return this.$store.state.speakers;
    },

    speaker() {
      return this.speakers.find((speaker) => speaker.slug === this.slug);
    },
  },

  created() {
    this.getSpeakers();
    this.getEvents();
  },

  methods: {
    ...mapActions(['getSpeakers', 'getEvents']),

    getMatchingEventInfo(slug) {
      return this.events.find((event) => event.slug === slug);
    },
  },

  head() {
    return {
      title: `Midwest Design Week | ${this.speaker.title.rendered}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.speaker.title.rendered} information`,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
