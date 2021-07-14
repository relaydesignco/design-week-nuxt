<template>
  <article class="lg:flex pb-8 lg:pb-14">
    <img
      :src="event.eventAcf.image ? event.eventAcf.image.mediaItemUrl : '/icon.png'"
      :alt="event.eventAcf.image ? event.eventAcf.image.altText : 'AIGA logo'"
      class="w-40 h-40 object-cover mr-8 mb-2"
    />
    <div class="">
      <time :datetime="event.eventAcf.start" class="text-xl font-semibold mr-1">
        {{ $dateFns.format(new Date(event.eventAcf.start)) }}
      </time>
      <span class="text-orange text-xl font-semibold">{{ event.eventAcf.type }}</span>
      <h2 class="font-bold text-4xl">{{ event.title }}</h2>
      <p v-if="event.eventAcf.speaker" class="text-gray text-xl font-semibold mb-2 lg:mb-4">
        {{ event.eventAcf.speaker }}
      </p>
      <NuxtLink :to="`/events/${event.slug}`" class="btn-sm lg:btn btn-gray mr-2 lg:mr-4">Event Info</NuxtLink>
      <a :href="options.registrationLink" class="btn-sm lg:btn btn-teal" target="_blank" rel="noopener noreferrer"
        >Register</a
      >
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

<style lang="scss" scoped></style>
