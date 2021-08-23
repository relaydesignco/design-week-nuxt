<template>
  <div class="pt-16 lg:pt-20">
    <section class="p-4 lg:p-8">
      <h1 class="text-2xl lg:text-3xl mb-2 lg:mb-4 uppercase text-center tracking-wide">Our Sponsors</h1>
      <p class="lg:text-lg text-center mb-8 lg:mb-20">
        Please follow them, show some love, try out their products or services.
      </p>
      <div v-for="(level, index) in levels" :key="index">
        <h2 class="text-xl text-center mb-8">{{ level }} Sponsor</h2>
        <Sponsors :sponsors="sponsors.filter((sponsor) => sponsor.sponsorAcf.level === level)" />
      </div>
    </section>
    <section id="sponsorship" class="bg-black px-4 lg:px-8 py-8 lg:py-16">
      <h2 class="text-2xl lg:text-4xl mb-3 uppercase text-center tracking-wide">Become a Sponsor!</h2>
      <!-- I added the utility classes below in the WP editor -->
      <!-- <p class="lg:text-lg mb-8 lg:mb-16 max-w-xl mx-auto text-center">
        We’d love to have you as a sponsor at this event or for future events. Our MWDW draws 500+ creatives from 9
        different states!
      </p> -->
      <div class="page-content sponsors max-w-xl mx-auto" v-html="sponsorsPage.content"></div>
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
    sponsors(where: { orderby: { field: TITLE, order: ASC } }, first: 100, after: null) {
      nodes {
        id
        title
        sponsorAcf {
          image {
            altText
            sourceUrl(size: LARGE)
          }
          level
          url
        }
      }
    }
  }
`;

export default {
  name: 'SponsorsPage',
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
  head() {
    return {
      title: `Midwest Design Week | Sponsors`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sponsorship information for Midwest Design Week 2021',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.page-content {
  h2,
  h3 {
    text-align: center;
  }
}
</style>
