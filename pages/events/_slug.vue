<template>
  <main class="p-10">
    <div class="lg:max-w-screen-lg mx-auto">
      <h1 class="text-2xl lg:text-4xl font-normal leading-tight mb-2">
        {{ event.title.rendered }}
      </h1>
      <h2 class="text-xl lg:text-3xl font-bold mb-3 lg:mb-8">{{ event.acf.speaker }}</h2>

      <div class="lg:flex pb-8 lg:pb-16">
        <div class="lg:w-1/4">
          <img
            :src="event.acf.image.sizes.large"
            alt="event.acf.image.alt"
            class="w-auto h-64 lg:w-64 lg:h-64 object-cover mb-4"
          />
        </div>
        <div class="lg:w-3/4 lg:pl-8">
          <time class="text-xl lg:text-3xl font-mono leading-none block mb-1">
            {{ $dateFns.format(new Date(event.acf.start), 'EEEE M/d') }}
          </time>

          <time class="text-xl lg:text-4xl font-mono leading-tight block mb-4">
            <span class="font-bold">
              {{ $dateFns.format(new Date(event.acf.start), 'h:mm') }}-{{
                $dateFns.format(new Date(event.acf.end), 'h:mmaaaaa')
              }}
            </span>
            ET
          </time>
          <section v-html="event.content.rendered"></section>
        </div>
      </div>
    </div>
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
