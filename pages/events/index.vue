<template>
  <div class="p-8">
    <h1 class="font-bold text-2xl mb-8">Events</h1>
    <div class="grid grid-cols-3 gap-8">
      <article v-for="event in events" :key="event.id" class="flex flex-col items-start">
        <h2 class="font-bold">{{ event.title }}</h2>
        <div class="">
          <p>Speaker: {{ event.eventAcf.speaker }}</p>
          <img :src="event.eventAcf.image.mediaItemUrl" :alt="event.eventAcf.image.altText" />
          <div v-html="event.content" />
        </div>
        <NuxtLink :to="`/events/${event.slug}`" class="btn-sm btn-blue"> More Info </NuxtLink>
      </article>
    </div>
    <a class="btn btn-green" :href="options.registrationLink">REGISTER</a>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const EVENTS_QUERY = gql`
  query EVENTS_QUERY {
    events {
      nodes {
        id
        title
        content
        slug
        eventAcf {
          speaker
          start
          end
          image {
            altText
            mediaItemUrl
          }
          isKeynote
        }
      }
    }
    globalOptions {
      options {
        registrationLink
      }
    }
  }
`;

export default {
  name: 'Events',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: EVENTS_QUERY,
    });
    return {
      events: data.events.nodes,
      options: data.globalOptions.options,
    };
  },
};
</script>

<style></style>
