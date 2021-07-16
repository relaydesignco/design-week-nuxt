<template>
  <div class="p-4 lg:p-8">
    <h1 class="text-3xl mb-8 lg:mb-16 uppercase text-center tracking-wide">Sponsors</h1>

    <div v-for="(level, index) in levels" :key="index">
      <h2 class="text-xl text-center mb-8">{{ level }} Sponsor</h2>
      <div class="flex flex-wrap justify-around gap-4 md:gap-12 items-center max-w-2xl mx-auto mb-16">
        <div
          v-for="sponsor in sponsors.filter((sponsor) => sponsor.sponsorAcf.level === level)"
          :key="sponsor.id"
          class="text-center transform hover:scale-105 transition-transform duration-300 w-48"
        >
          <a :href="sponsor.sponsorAcf.url" target="_blank" rel="noopener noreferrer">
            <img :src="sponsor.sponsorAcf.image.mediaItemUrl" :alt="sponsor.sponsorAcf.image.altText" class="w-full" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const SPONSORS_QUERY = gql`
  query SPONSORS_QUERY {
    sponsors(where: { orderby: { field: TITLE, order: ASC } }) {
      nodes {
        id
        title
        sponsorAcf {
          image {
            altText
            mediaItemUrl
          }
          level
          url
        }
      }
    }
  }
`;

export default {
  name: 'Sponsors',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: SPONSORS_QUERY,
    });
    console.log(data.sponsors.nodes);
    return {
      sponsors: data.sponsors.nodes,
    };
  },
  data() {
    return {
      levels: ['Premier', 'Event', 'Supporting', 'In-Kind', 'Creative'],
    };
  },
};
</script>

<style></style>
