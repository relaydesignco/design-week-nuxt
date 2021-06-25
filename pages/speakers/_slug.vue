<template>
  <section class="p-6 bg-dark text-white">
    <div class="w-full text-right lg:pr-32">
      <close-button to-route="/speakers" />
    </div>
    <div class="lg:max-w-screen-lg mx-auto lg:flex pb-8 lg:pb-16">
      <div class="lg:w-2/5">
        <transition appear enter-active-class="animated fadeIn delay-5">
          <img
            :src="speaker.acf.image.sizes.large"
            :alt="speaker.acf.image.alt"
            class="w-auto h-64 lg:w-full lg:h-96 object-cover mb-4 lg:mb-8"
          />
        </transition>

        <transition appear enter-active-class="animated fadeIn delay-1s">
          <section class="hidden lg:block leading-relaxed mb-6" v-html="speaker.content.rendered"></section>
        </transition>
      </div>

      <div class="lg:w-3/5 lg:pl-8">
        <transition appear enter-active-class="animated fadeInRight fast delay-5">
          <h1 class="text-2xl lg:text-4xl font-bold font-mono leading-tight">
            {{ speaker.title.rendered }}
          </h1>
        </transition>

        <transition appear enter-active-class="animated fadeIn fadeInRight fast delay-6">
          <h2 class="text-xl lg:text-2xl font-normal font-mono leading-tight mb-2 lg:mb-16">
            {{ speaker.acf.job_title }}
          </h2>
        </transition>

        <transition appear enter-active-class="animated fadeIn delay-1s">
          <section class="lg:hidden leading-relaxed mb-6" v-html="speaker.content.rendered"></section>
        </transition>

        <template v-if="speaker.acf.sessions">
          <transition appear enter-active-class="animated fadeInUp delay-7">
            <h3 class="lg:text-xl uppercase mb-2">Sessions</h3>
          </transition>

          <transition appear enter-active-class="animated fadeInUp delay-8 fast">
            <div v-for="session in publishedSessions" :key="session.event.ID" class="font-bold">
              <nuxt-link :to="`/events/${session.event.post_name}`">
                <time class="text-2xl lg:text-3xl font-semibold text-blue-light">
                  {{
                    $dateFns.format(new Date(getMatchingEventInfo(session.event.post_name).acf.start), 'M/d h:mmaaaaa')
                  }}
                </time>
              </nuxt-link>
              <h4 class="text-xl font-normal leading-tight mb-3">
                {{ session.event.post_title }}
              </h4>
              <a
                :href="options.register_link"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-sm lg:btn btn-blue mb-8"
              >
                Register
              </a>
            </div>
          </transition>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Speaker',

  data() {
    return {
      slug: this.$route.params.slug,
    };
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

  computed: {
    ...mapState(['speakers', 'events', 'options']),

    speaker() {
      return this.speakers.find((speaker) => speaker.slug === this.slug);
    },

    publishedSessions() {
      return this.speaker.acf.sessions.filter((session) => session.event.post_status === 'publish');
    },
  },

  created() {
    this.getSpeakers();
    this.getEvents();
    this.getOptions();
  },

  methods: {
    ...mapActions(['getSpeakers', 'getEvents', 'getOptions']),

    getMatchingEventInfo(slug) {
      return this.events.find((event) => event.slug === slug);
    },
  },
};
</script>

<style lang="postcss" scoped></style>
