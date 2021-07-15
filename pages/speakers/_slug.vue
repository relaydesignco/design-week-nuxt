<template>
  <div class="flex flex-col items-start p-4 space-y-4">
    <h1 class="font-bold text-4xl">{{ speaker.title }}</h1>
    <hr class="w-full" />
    <img :src="speaker.speakerAcf.image.mediaItemUrl" :alt="speaker.speakerAcf.image.altText" />
    <div v-html="speaker.content" />
    <hr class="w-full" />
    <NuxtLink to="/speakers" class="btn btn-orange"> Go back </NuxtLink>
    <h2 class="font-bold text-xl">Sessions</h2>
    <ul>
      <li v-for="event in speaker.speakerAcf.sessions" :key="event.event.id">
        <NuxtLink :to="`/events/${event.event.slug}`">{{ event.event.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const SINGLE_SPEAKER_QUERY = gql`
  query SINGLE_SPEAKER_QUERY($id: ID!) {
    speaker(id: $id, idType: SLUG) {
      id
      title
      content
      slug
      speakerAcf {
        url
        jobTitle
        sessions {
          event {
            ... on Event {
              id
              title
              slug
            }
          }
        }
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
      query: SINGLE_SPEAKER_QUERY,
      variables: {
        id: params.slug,
      },
    });
    return { speaker: data.speaker };
  },
};
</script>
