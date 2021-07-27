<template>
  <div class="px-4 lg:px-8 pb-16 pt-24 lg:pt-28 container mx-auto">
    <h1 class="text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">Our Speakers</h1>
    <Speakers :speakers="sortedSpeakers" />
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
        lastName
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
            sourceUrl(size: LARGE)
          }
        }
      }
    }
  }
`;

export default {
  name: 'SpeakersPage',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: SPEAKERS_QUERY,
    });
    // console.log(data.speakers.nodes);
    return {
      speakers: data.speakers.nodes,
    };
  },
  head() {
    return {
      title: `Midwest Design Week | Speakers`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'List of Speakers for Midwest Design Week 2021',
        },
      ],
    };
  },
  computed: {
    sortedSpeakers() {
      return this.speakers.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
};
</script>

<style></style>
