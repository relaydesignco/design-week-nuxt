<template>
  <main class="p-8">
    <h1 class="text-2xl lg:text-4xl mb-8 lg:mb-12 uppercase text-center tracking-wide">
      {{ page.title }}
    </h1>
    <section class="">
      <div class="max-w-screen-md page-content mx-auto" v-html="page.content" />
    </section>
  </main>
</template>

<script>
import gql from 'graphql-tag';

const PAGE_QUERY = gql`
  query PAGE_QUERY($id: ID!) {
    page(id: $id, idType: URI) {
      id
      title
      content
    }
  }
`;
export default {
  name: 'SponsorPage',
  async asyncData({ app, params, error }) {
    const client = app.apolloProvider.defaultClient;
    try {
      const { data } = await client.query({
        query: PAGE_QUERY,
        variables: {
          id: `/${params.slug}/`,
        },
      });
      if (data.page == null) {
        throw new Error('That page was not found.');
      }
      return {
        page: data.page,
      };
    } catch (err) {
      error({ statusCode: 404, message: err.message });
    }
  },

  head() {
    return {
      title: `Midwest Design Week | ${this.page.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.page.title} for Midwest Design Week 2021`,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
