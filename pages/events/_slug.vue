<template>
  <div class="flex flex-col items-start p-4 space-y-4">
    <h1 class="font-bold text-2xl">{{ event.title }}</h1>
    <div class="">
      <p v-if="event.eventAcf.speaker">{{ event.eventAcf.speaker }}</p>
      <time :datetime="event.eventAcf.start">{{ $dateFns.format(new Date(event.eventAcf.start)) }}</time> -
      <time :datetime="event.eventAcf.end">{{ $dateFns.format(new Date(event.eventAcf.end), 'haaa') }}</time>
    </div>
    <img v-if="event.eventAcf.image" :src="event.eventAcf.image.mediaItemUrl" :alt="event.eventAcf.image.altText" />
    <img v-else src="/icon.png" alt="AIGA logo" />
    <div v-html="event.content" />
    <NuxtLink to="/events" class="btn btn-orange"> Go back </NuxtLink>
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
        type
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
