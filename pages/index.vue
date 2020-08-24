<template>
  <div>
    <!-- <app-hero /> -->
    <!-- opening blurb -->
    <section class="bg-dark p-6 lg:py-32 text-white lg:text-2xl">
      <p class="lg:max-w-screen-lg mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con-
        sequat. Duis
      </p>
    </section>

    <!-- keynote highlight -->
    <section class="bg-offwhite p-6 lg:py-16">
      <div class="lg:flex lg:max-w-screen-lg mx-auto">
        <img src="/1024x1024.png" alt="speaker" class="lg:mr-10 lg:w-1/2" />
        <div>
          <h2 class="text-lg pb-1 pt-4 lg:pt-0">Monday - Keynote Speaker</h2>
          <time class="text-3xl font-semibold">09/21 - 6pm</time>
          <h3 class="text-2xl font-semibold">Terresa_Moses</h3>
          <h4 class="text-xl font-normal pt-4 pb-5 leading-tight">
            Storybuilding & the Future of Truth In Our Branded World
          </h4>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-blue hover:bg-blue-dark"
          >
            Register
          </a>
        </div>
      </div>
    </section>

    <!-- upcoming events -->
    <section class="p-6 lg:py-16">
      <div class="lg:max-w-screen-lg mx-auto">
        <h2 class="text-2xl lg:text-4xl font-mono mb-4">Upcoming Events_</h2>
        <div class="grid lg:grid-cols-3 gap-6">
          <div v-for="event in sortedEvents.slice(0, 3)" :key="event.id">
            <nuxt-link :to="`/events/${event.slug}`">
              <img
                :src="event.acf.image.sizes.large"
                alt="event.acf.image.alt"
                class="w-64 h-64 object-cover"
              />
            </nuxt-link>
            <time class="font-mono font-bold block mt-2 mb-1">
              {{ $dateFns.format(new Date(event.acf.start), 'M/d h:mmaaaaa') }} ET
            </time>
            <h3 class="font-mono text-2xl">{{ event.acf.speaker }}</h3>
            <h4 class="font-mono font-normal text-lg leading-tight">
              <a :href="`${event.acf.url}`" target=" _blank" rel="noopener noreferrer">{{
                event.title.rendered
              }}</a>
            </h4>
            <!-- <div>{{ event.acf.description }}</div> -->
            <!-- <a :href="`events/${event.slug}`">Get Info</a> -->
          </div>
        </div>
        <div class="w-full text-center mt-8">
          <nuxt-link to="/events" class="btn bg-blue hover:bg-blue-dark"
            >See Full Schedule
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- email form -->
    <section class="p-6 lg:max-w-screen-lg mx-auto bg-dark">
      <h2 class="text-2xl lg:text-4xl text-white mb-8 font-mono">Stay Connected_</h2>
      <email-form
        form-action="https://aiga.us3.list-manage.com/subscribe/post"
        mc-u="751e598f443a47697e8b78cb9"
        mc-id="f248d566af"
      />
    </section>

    <!-- sponsors -->
    <section class="p-6 lg:py-24">
      <div class="lg:max-w-screen-lg mx-auto">
        <h2 class="text-2xl lg:text-4xl font-mono mb-10 lg:mb-16">Thanks to our Sponsors_</h2>
        <div class="grid grid-cols-3 gap-4 items-center">
          <a
            v-for="sponsor in sponsors"
            :key="sponsor.id"
            :href="`${sponsor.acf.url}`"
            target=" _blank"
            rel="noopener noreferrer"
          >
            <img :src="sponsor.acf.image.sizes.large" :alt="sponsor.acf.image.alt" class="w-64" />
          </a>
          <!-- <h3>{{ sponsor.title.rendered }}</h3> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
// import AppHero from '@/components/AppHero.vue';
import EmailForm from '@/components/EmailForm';

export default {
  name: 'Home',
  components: {
    // AppHero,
    EmailForm,
  },

  transition: {
    enterActiveClass: 'animated fadeIn faster',
    enterLeaveClass: 'animated fadeOut faster',
  },

  data() {
    return {
      // selectedTag: null,
      // activeClass: 'active',
    };
  },

  computed: {
    ...mapState(['events', 'sponsors']),

    ...mapGetters(['sortedEvents']),
  },

  created() {
    this.getEvents();
  },

  methods: {
    ...mapActions(['getEvents']),
  },
};
</script>

<style lang="postcss"></style>
