<template>
  <div>
    <section class="p-4 lg:p-8">
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
              <img
                :src="sponsor.sponsorAcf.image.mediaItemUrl"
                :alt="sponsor.sponsorAcf.image.altText"
                class="w-full"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-black px-4 lg:px-8 py-16 text-center">
      <h2 class="text-3xl mb-2 uppercase text-center tracking-wide">BECOME A SPONSOR!</h2>
      <p class="text-lg mb-8 max-w-xl mx-auto">
        We’d love to have you as a sponsor at this event or for future events. Our MWDW draws 5,000+ creatives from 9
        different states!
      </p>
      <div class="page-content max-w-2xl mx-auto" v-html="sponsorsPage.content"></div>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const SPONSORS_QUERY = gql`
  query SPONSORS_QUERY {
    page(id: "/sponsors/", idType: URI) {
      id
      title
      content
    }
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
    // console.log(data.page);
    // console.log(data.sponsors.nodes);
    return {
      sponsorsPage: data.page,
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
