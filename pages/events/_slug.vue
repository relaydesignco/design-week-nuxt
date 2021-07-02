<template>
  <div class="flex flex-col items-start p-4 space-y-4">
    <h1 class="font-bold text-2xl">{{ event.title }}</h1>
    <hr class="w-full" />
    <div class="">
      <p>Speaker: {{ event.eventAcf.speaker }}</p>
      <time>{{ event.eventAcf.start }} - {{ event.eventAcf.end }}</time>
    </div>
    <img :src="event.eventAcf.image.mediaItemUrl" :alt="event.eventAcf.image.altText" />
    <div v-html="event.content" />
    <hr class="w-full" />
    <NuxtLink to="/events" class="btn btn-blue"> Go back </NuxtLink>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    event(id: $id, idType: SLUG) {
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
      }
    }
  }
`;

export default {
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: SINGLE_EVENT_QUERY,
      variables: {
        id: params.slug,
      },
    });
    return { event: data.event };
  },
};
</script>
