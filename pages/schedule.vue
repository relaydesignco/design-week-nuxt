<template>
  <div>
    <h1
      class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-16 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto"
    >
      Schedule_
    </h1>
    <section class="px-6 py-4 lg:py-10">
      <div class="lg:max-w-screen-lg mx-auto">
        <h2 class="lg:text-3xl font-mono font-normal mb-2 lg:mb-4">September 2020</h2>
        <!-- day select buttons -->
        <div class="grid grid-cols-5 gap-2 lg:gap-4 pb-8 lg:pb-16">
          <button class="calendar-button">
            Mon
            <div class="date">
              21
            </div>
          </button>
          <button class="calendar-button">
            Tue
            <div class="date">
              22
            </div>
          </button>
          <button class="calendar-button">
            Wed
            <div class="date">
              23
            </div>
          </button>
          <button class="calendar-button">
            Thu
            <div class="date">
              24
            </div>
          </button>
          <button class="calendar-button">
            Fri
            <div class="date">
              25
            </div>
          </button>
        </div>

        <div
          v-for="event in sortedEvents"
          :key="event.id"
          class="flex lg:max-w-screen-lg pb-8 lg:pb-16"
        >
          <div class="w-2/5 lg:w-1/4">
            <time class="lg:text-3xl font-mono">
              {{ $dateFns.format(new Date(event.acf.start), 'h:mm') }}-{{
                $dateFns.format(new Date(event.acf.end), 'h:mmaaaaa')
              }}
              ET
            </time>
            <img
              :src="event.acf.image.sizes.large"
              alt="event.acf.image.alt"
              class="w-32 lg:w-64 h-32 lg:h-64 object-cover"
            />
          </div>
          <div class="w-3/5 lg:w-3/4 pl-4 lg:pl-8 pt-1 lg:pt-10">
            <h4 class="lg:text-3xl font-normal leading-tight mb-1">
              {{ event.title.rendered }}
            </h4>
            <h3 class="text-sm lg:text-2xl font-bold mb-3 lg:mb-8">{{ event.acf.speaker }}</h3>
            <a href="#" class="btn-sm lg:btn bg-green hover:bg-green-dark mb-2 mr-2">Event Info</a>
            <a :href="`${event.acf.url}`" class="btn-sm lg:btn bg-blue hover:bg-blue-dark">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-blue px-6 py-4 lg:py-10">
      <p class="text-center text-white text-xl lg:text-2xl">
        Get your All Access Pass
      </p>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Events',

  computed: {
    ...mapGetters(['sortedEvents']),
  },

  created() {
    this.getEvents();
  },

  methods: {
    ...mapActions(['getEvents']),
  },

  head() {
    return {
      title: `Midwest Design Week | ${this.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Schedule of Events for Midwest Design Week 2020',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.calendar-button {
  width: 3.75rem;
  height: 3.75rem;
  padding-top: 0.4em;
  .date {
    font-size: 2.25rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
    font-size: 2.5rem;
    .date {
      font-size: 6rem;
      line-height: 0.9375em;
    }
  }
}
</style>
