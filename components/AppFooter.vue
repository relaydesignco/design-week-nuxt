<template>
  <footer :class="[{ 'bg-black': !bgTransparent }, 'p-4 lg:px-8']">
    <div class="max-w-screen-lg mx-auto lg:flex justify-between gap-4 text-xs">
      <a href="//aiga.org" target="_blank" rel="noopener noreferrer">
        <div class="w-24 mb-8 lg:mb-0">
          <SvgAigaFullLogo />
        </div>
      </a>
      <div>
        <ul class="mb-4 lg:mb-8">
          <li v-for="page in footerPages" :key="page.id" class="mb-2">
            <nuxt-link :to="`/${page.slug}`" class="font-bold">
              {{ page.title }}
            </nuxt-link>
          </li>
        </ul>
        <h2 class="mb-2">Support Contacts</h2>
        <ul class="mb-6 lg:mb-0">
          <li class="mb-2">
            Cincinnati -
            <a href="mailto:communications@aigacincinnati.org" class="font-mono font-normal">
              communications@aigacincinnati.org</a
            >
          </li>
          <li class="mb-2">
            Indianapolis -
            <a href="mailto:president@indianapolis.aiga.org" class="font-mono font-normal">
              president@indianapolis.aiga.org</a
            >
          </li>
          <li class="mb-2">
            Louisville -
            <a href="mailto:contact@aigalou.org" class="font-mono font-normal"> contact@aigalou.org </a>
          </li>
          <li class="mb-2">
            Toledo -
            <a href="mailto:president@toledo.aiga.org" class="font-mono font-normal"> president@toledo.aiga.org </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col justify-between">
        <a href="//facebook.com/MidwestDesignWeek/" target="_blank" rel="noopener noreferrer" class="w-12 block mb-4">
          <SvgFacebook />
        </a>
        <div>
          <p>© {{ year }} AIGA Midwest Design Week</p>
          <p>
            site designed and developed by
            <a href="//relaydesign.co" target="_blank" rel="noopener noreferrer" class="font-mono">
              relay design co.
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import gql from 'graphql-tag';

const PAGES_QUERY = gql`
  query PAGES_QUERY {
    pages {
      nodes {
        id
        slug
        isFrontPage
        title
      }
    }
  }
`;
export default {
  name: 'AppFooter',
  props: {
    bgTransparent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pages: [],
      year: new Date().getFullYear(),
    };
  },
  async fetch() {
    const client = this.$nuxt.context.app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: PAGES_QUERY,
    });
    this.pages = data.pages.nodes;
  },
  computed: {
    footerPages() {
      const noRender = ['home', 'sponsors'];
      return this.pages.filter((page) => !noRender.includes(page.slug));
    },
  },
};
</script>

<style lang="postcss" scoped>
a {
  @apply hover:text-orange-light transition-colors duration-200;
}
</style>
