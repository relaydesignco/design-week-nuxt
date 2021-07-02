<template>
  <div class="p-8">
    <h1 class="font-bold text-2xl mb-8">Speakers</h1>
    <div class="grid grid-cols-3 gap-8">
      <article v-for="speaker in speakers" :key="speaker.id" class="flex flex-col items-start">
        <h2 class="font-bold">{{ speaker.title }}</h2>
        <div class="">
          <p>Job: {{ speaker.speakerAcf.jobTitle }}</p>
          <img :src="speaker.speakerAcf.image.mediaItemUrl" :alt="speaker.speakerAcf.image.altText" />
          <div v-html="speaker.content" />
        </div>
        <NuxtLink :to="`/speakers/${speaker.slug}`" class="btn-sm btn-blue"> About </NuxtLink>
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
