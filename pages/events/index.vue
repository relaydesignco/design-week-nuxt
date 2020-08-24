<template>
  <div>
    <h1
      class="font-mono text-2xl lg:text-4xl px-6 pb-4 lg:pb-8 pt-12 lg:pt-32 lg:px-0 lg:max-w-screen-lg mx-auto"
    >
      Events Schedule_
    </h1>
    <section class="px-6 py-4 lg:py-10">
      <div class="lg:max-w-screen-lg mx-auto">
        <h2 class="lg:text-3xl font-mono font-normal mb-2 lg:mb-4">September 2020</h2>
        <!-- day select buttons -->
        <div class="grid grid-cols-5 gap-2 lg:gap-4 pb-8 lg:pb-16">
          <button
            v-for="(day, index) in days"
            :key="index"
            :class="[
              [index === currentSelectedDayIndex ? 'bg-green' : 'bg-offwhite-dark'],
              'font-mono font-bold text-black leading-none uppercase calendar-button transition-colors duration-300',
            ]"
            @click="selectDay(index)"
          >
            {{ day.name }}
            <div class="date">
              {{ day.date }}
            </div>
          </button>
        </div>

        <div
          v-for="event in selectedDaysEvents"
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
              :alt="event.acf.image.alt"
              class="w-32 lg:w-64 h-32 lg:h-64 object-cover"
            />
          </div>
          <div class="w-3/5 lg:w-3/4 pl-4 lg:pl-8 pt-1 lg:pt-10">
            <h4 class="lg:text-3xl font-normal leading-tight mb-1">
              {{ event.title.rendered }}
            </h4>
            <h3 class="text-sm lg:text-2xl font-bold mb-3 lg:mb-8">{{ event.acf.speaker }}</h3>
            <nuxt-link
              :to="`/events/${event.slug}`"
              class="btn-sm lg:btn bg-green hover:bg-green-dark mb-2 mr-2"
            >
              Event Info
            </nuxt-link>
            <a
              :href="event.acf.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-sm lg:btn bg-blue hover:bg-blue-dark"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-offwhite-dark px-6 py-4 lg:py-10">
      <p class="text-center lg:text-2xl font-mono">
        Get your All Access Pass
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-sm lg:btn bg-blue hover:bg-blue-dark ml-2"
          >Purchase Now</a
        >
      </p>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Events',

  transition: {
    enterActiveClass: 'animated fadeInUp fast',
    enterLeaveClass: 'animated fadeOutUp fast',
  },

  data() {
    return {
      days: [
        {
          name: 'Mon',
          date: '21',
        },
        {
          name: 'Tue',
          date: '22',
        },
        {
          name: 'Wed',
          date: '23',
        },
        {
          name: 'Thu',
          date: '24',
        },
        {
          name: 'Fri',
          date: '25',
        },
      ],
      currentSelectedDayIndex: 0,
    };
  },

  computed: {
    ...mapGetters(['sortedEvents']),

    dayOfWeek() {
      return this.$dateFns.getDay(new Date());
    },

    selectedDaysEvents() {
      return this.sortedEvents.filter(
        (event) => event.acf.start.split('/')[1] === this.days[this.currentSelectedDayIndex].date
      );
    },
  },

  created() {
    this.getEvents();
    // console.log(this.sortedEvents);
  },

  methods: {
    ...mapActions(['getEvents']),

    selectDay(index) {
      this.currentSelectedDayIndex = index;
      console.log(this.selectedDaysEvents);
    },
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
