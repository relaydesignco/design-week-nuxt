<template>
  <div class="p-8">
    <h1 class="font-bold text-2xl mb-8">Sponsors</h1>
    <div class="grid grid-cols-3 gap-8">
      <article v-for="sponsor in sponsors" :key="sponsor.id" class="flex flex-col items-start">
        <h2 class="font-bold">{{ sponsor.title }}</h2>
        <div class="">
          <a :href="sponsor.sponsorAcf.url" target="_blank" rel="noopener noreferrer">
            <img :src="sponsor.sponsorAcf.image.mediaItemUrl" :alt="sponsor.sponsorAcf.image.altText" />
          </a>
          <p>Level: {{ sponsor.sponsorAcf.level }}</p>
        </div>
      </article>
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
    return {
      sponsors: data.sponsors.nodes,
    };
  },
};
</script>

<style></style>
