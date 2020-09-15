<template>
  <div>
    <!-- opening blurb -->
    <section class="bg-dark p-6 py-10 lg:py-32 text-white lg:text-2xl">
      <div
        class="lg:max-w-screen-md mx-auto leading-relaxed blurb"
        v-html="homePage.content.rendered"
      ></div>
    </section>

    <!-- keynote highlight -->
    <section class="bg-offwhite p-6 lg:py-16">
      <div class="md:flex justify-center items-center lg:max-w-screen-md mx-auto">
        <img
          v-if="keynote.acf.image"
          :src="keynote.acf.image.sizes.large"
          :alt="keynote.acf.image.alt"
          class="w-96 h-96 object-cover md:mr-10"
        />
        <div v-else class="w-1/2 lg:mr-10"><svg-logo /></div>
        <div>
          <h2 class="text-lg pb-1 pt-4 lg:pt-0">
            {{ $dateFns.format(new Date(keynote.acf.start), 'EEEE') }} - Keynote Speaker
          </h2>
          <time class="text-3xl font-semibold">
            {{ $dateFns.format(new Date(keynote.acf.start), 'EEEE M/d h:mmaaaaa') }}
          </time>
          <h3 class="text-2xl font-semibold">{{ keynote.acf.speaker }}</h3>
          <h4 class="text-xl font-normal pt-4 pb-5 leading-tight">
            {{ keynote.title.rendered }}
          </h4>
          <a
            :href="options.register_link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-blue mr-2"
          >
            Register
          </a>
          <nuxt-link :to="`/events/${keynote.slug}`" class="btn btn-green mb-2 mr-2">
            Event Info
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- upcoming events -->
    <section class="px-6 py-10 lg:py-16">
      <div class="lg:max-w-screen-lg mx-auto">
        <h2 class="text-2xl lg:text-4xl font-mono mb-4">Upcoming Events_</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="event in upcomingEvents.slice(0, 3)"
            :key="event.id"
            class="transform hover:scale-105 transition-transform duration-300 mx-auto"
          >
            <!-- TODO make this show next 3 events -->
            <nuxt-link :to="`/events/${event.slug}`">
              <img
                v-if="event.acf.image"
                :src="event.acf.image.sizes.large"
                alt="event.acf.image.alt"
                class="w-64 h-64 object-cover"
              />
              <div v-else class="w-64 h-64 object-cover"><svg-logo /></div>
            </nuxt-link>
            <time class="font-mono font-bold block mt-2 mb-1">
              {{ $dateFns.format(new Date(event.acf.start), 'M/d h:mmaaaaa') }} ET
            </time>
            <h3 class="font-mono text-2xl">{{ event.acf.speaker }}</h3>
            <h4 class="font-mono font-normal text-lg leading-tight">
              <a :href="`${options.register_link}`" target=" _blank" rel="noopener noreferrer">{{
                event.title.rendered
              }}</a>
            </h4>
          </div>
        </div>
        <div class="w-full text-center mt-12">
          <nuxt-link to="/events" class="btn btn-blue">See Full Schedule </nuxt-link>
        </div>
      </div>
    </section>

    <!-- email form -->
    <section class="px-6 py-10 lg:max-w-screen-md mx-auto bg-dark">
      <h2 class="text-2xl lg:text-4xl text-white mb-8 font-mono">Stay Connected_</h2>
      <email-form
        form-action="https://aiga.us3.list-manage.com/subscribe/post"
        mc-u="751e598f443a47697e8b78cb9"
        mc-id="f248d566af"
      />
    </section>

    <!-- sponsors -->
    <section class="px-6 py-10 lg:py-24">
      <div class="lg:max-w-screen-lg mx-auto">
        <h2 class="text-2xl lg:text-4xl font-mono mb-10 lg:mb-16">Thanks to our Sponsors_</h2>
        <div class="flex flex-wrap items-center justify-around mb-6 lg:mb-16">
          <a
            v-for="sponsor in sortedSponsors"
            :key="sponsor.id"
            :href="`${sponsor.acf.url}`"
            target=" _blank"
            rel="noopener noreferrer"
            class="transform hover:scale-105 transition-transform duration-300 w-1/2 md:w-1/4 p-4"
          >
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" class="w-64" />
          </a>
        </div>
      </div>
    </section>

    <cta-section
      button-link="/sponsorship"
      text="Are you interested in becoming a Sponsor?"
      button-text="Visit Sponsorship Page"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import EmailForm from '@/components/EmailForm';
import SvgLogo from '@/components/SvgLogo';
import CtaSection from '@/components/CtaSection';

export default {
  name: 'Home',
  components: {
    EmailForm,
    SvgLogo,
    CtaSection,
  },

  data() {
    return {
      upcomingEvents: [],
    };
  },

  computed: {
    ...mapState(['events', 'sponsors', 'options', 'pages']),

    ...mapGetters(['sortedEvents', 'sortedSponsors']),

    homePage() {
      return this.pages.find((page) => page.slug === 'home');
    },

    keynote() {
      return this.events.find((event) => event.acf.is_keynote === true);
    },
  },

  created() {
    this.getEvents();
    this.getSponsors();
    this.getOptions();
    this.getPages();

    this.upcomingEvents = this.sortedEvents.filter((event) =>
      this.$dateFns.isAfter(new Date(event.acf.end), new Date())
    );
    // console.log(this.upcomingEvents);
  },

  methods: {
    ...mapActions(['getEvents', 'getSponsors', 'getOptions', 'getPages']),
  },
};
</script>

<style lang="postcss">
.blurb {
  p {
    margin-bottom: 1rem;
  }
}
</style>
