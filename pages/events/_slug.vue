<template>
  <div>
    <section class="px-6 pt-6 pb-16 lg:pb-32">
      <div class="w-full text-right lg:pr-32">
        <close-button to-route="/events" />
      </div>
      <div class="lg:max-w-screen-lg mx-auto">
        <transition appear enter-active-class="animated fadeInRight fast delay-4">
          <h1 class="text-2xl lg:text-4xl font-normal leading-tight mb-1">
            {{ event.title.rendered }}
          </h1>
        </transition>
        <transition appear enter-active-class="animated fadeInRight fast delay-5">
          <h2 class="text-xl lg:text-3xl font-bold mb-3 lg:mb-8">{{ event.acf.speaker }}</h2>
        </transition>

        <div class="lg:flex pb-8 lg:pb-16">
          <div class="lg:w-2/5">
            <transition appear enter-active-class="animated fadeIn delay-5">
              <img
                :src="event.acf.image.sizes.large"
                :alt="event.acf.image.alt"
                class="w-auto h-64 lg:w-full lg:h-96 object-cover mb-4"
              />
            </transition>
          </div>
          <div class="lg:w-3/5 lg:pl-8">
            <transition appear enter-active-class="animated fadeInUp delay-7">
              <time class="text-xl lg:text-3xl font-mono leading-none block mb-1">
                {{ $dateFns.format(new Date(event.acf.start), 'EEEE M/d') }}
              </time>
            </transition>

            <transition appear enter-active-class="animated fadeInUp delay-8">
              <time class="text-xl lg:text-4xl font-mono leading-tight block mb-2 lg:mb-4">
                <span class="font-bold">
                  {{ $dateFns.format(new Date(event.acf.start), 'h:mm') }}-{{
                    $dateFns.format(new Date(event.acf.end), 'h:mmaaaaa')
                  }}
                </span>
                ET
              </time>
            </transition>

            <transition appear enter-active-class="animated fadeIn delay-1s">
              <section class="lg:text-lg leading-relaxed" v-html="event.content.rendered"></section>
            </transition>
          </div>
        </div>
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter';
import CloseButton from '@/components/CloseButton';
export default {
  name: 'Event',
  components: {
    AppFooter,
    CloseButton,
  },

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
      title: `Midwest Design Week | ${this.event.title.rendered}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.event.title.rendered} information`,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
