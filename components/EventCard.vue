<template>
  <article class="lg:flex pb-10 lg:pb-14">
    <img
      :src="event.eventAcf.image ? event.eventAcf.image.sourceUrl : '/icon.png'"
      :alt="event.eventAcf.image ? event.eventAcf.image.altText : 'AIGA logo'"
      class="w-40 h-40 object-cover mr-8 mb-2"
    />
    <div class="leading-tight">
      <time :datetime="event.eventAcf.start" class="text-lg lg:text-xl font-semibold mr-1">
        {{ $dateFns.format(new Date(event.eventAcf.start)) }}
      </time>
      <span class="text-orange text-xl font-semibold">{{ event.eventAcf.type }}</span>

      <h2 class="font-bold text-2xl lg:text-4xl mb-2 leading-tighter">{{ event.title }}</h2>
      <p v-if="event.eventAcf.speakers" class="text-gray text-lg lg:text-xl font-semibold mb-3 lg:mb-4 leading-none">
        <span v-for="(speaker, index) in event.eventAcf.speakers" :key="speaker.speaker.id">
          {{ speaker.speaker.title
          }}<span v-if="index !== event.eventAcf.speakers.length - 1 || event.eventAcf.otherSpeakers">, </span>
        </span>
        <span v-if="event.eventAcf.otherSpeakers">{{ event.eventAcf.otherSpeakers }}</span>
      </p>
      <NuxtLink :to="`/events/${event.slug}`" class="btn-sm lg:btn btn-gray mr-2 lg:mr-4">Event Info</NuxtLink>
      <a :href="options.registrationLink" class="btn-sm lg:btn btn-teal" target="_blank" rel="noopener noreferrer">
        Register
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
