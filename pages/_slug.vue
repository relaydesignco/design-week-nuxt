<template>
  <div class="p-8">
    <h1 class="text-2xl lg:text-4xl">
      {{ page.title }}
    </h1>
    <section class="">
      <div class="max-w-screen-md text-lg page-content" v-html="page.content" />
    </section>
  </div>
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
  name: 'Page',

  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: PAGE_QUERY,
      variables: {
        id: `/${params.slug}/`,
      },
    });
    return {
      page: data.page,
    };
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

  created() {},
};
</script>

<style lang="postcss" scoped></style>
