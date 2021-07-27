<template>
  <div class="pt-24 lg:pt-28 px-8 pb-8">
    <h1 class="text-2xl lg:text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">About Midwest Design Week</h1>
    <section class="">
      <div class="max-w-screen-md page-content mx-auto" v-html="aboutPage.content" />
    </section>
    <section class="max-w-screen-md mx-auto">
      <h2 class="text-xl md:text-xl mb-6">Chapters Included</h2>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="chapter in aboutPage.aboutAcf.chapters" :key="chapter.handle" class="flex gap-2">
          <div class="w-9 flex-shrink-0">
            <AigaLogo :fill="chapter.color" />
          </div>
          <div class="leading-none">
            <p>
              <a :href="chapter.website" target="_blank" rel="noopener noreferrer" class="underline"
                >{{ chapter.name }}
              </a>
            </p>
            <p>
              <a
                :href="`http://instagram.com/${chapter.handle}`"
                target="_blank"
                rel="noopener noreferrer"
                class="underline"
              >
                @{{ chapter.handle }}
              </a>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const ABOUT_PAGE_QUERY = gql`
  query ABOUT_PAGE_QUERY {
    page(id: "/about/", idType: URI) {
      id
      title
      content
      aboutAcf {
        chapters {
          color
          website
          handle
          name
        }
      }
    }
  }
`;
export default {
  name: 'AboutPage',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: ABOUT_PAGE_QUERY,
    });
    // console.log(data.page);
    return {
      aboutPage: data.page,
    };
  },

  head() {
    return {
      title: `Midwest Design Week | About`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `About Midwest Design Week 2021`,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
