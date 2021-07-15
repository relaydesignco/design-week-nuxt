<template>
  <div class="p-4 lg:p-8">
    <h1 class="text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">Our Speakers</h1>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-2xl mx-auto">
      <article v-for="speaker in speakers" :key="speaker.id" class="text-center mb-12 md:mb-4">
        <NuxtLink :to="`/speakers/${speaker.slug}`">
          <img
            :src="speaker.speakerAcf.image.mediaItemUrl"
            :alt="speaker.speakerAcf.image.altText"
            class="w-48 h-48 object-cover mx-auto mb-2 lg:mb-3"
          />
          <h2 class="text-lg leading-7">{{ speaker.title }}</h2>
          <h3 class="font-normal">{{ speaker.speakerAcf.jobTitle }}</h3>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const SPEAKERS_QUERY = gql`
  query SPEAKERS_QUERY {
    speakers {
      nodes {
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
  }
`;

export default {
  name: 'Speakers',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: SPEAKERS_QUERY,
    });
    return {
      speakers: data.speakers.nodes,
    };
  },
};
</script>

<style></style>
