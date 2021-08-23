<template>
  <footer :class="[{ 'bg-black': !bgTransparent }, 'p-4 py-8 lg:py-16']">
    <div class="max-w-screen-lg mx-auto md:flex flex-wrap justify-between gap-4 text-xs">
      <div class="w-20 mb-8 lg:mb-0">
        <a href="//aiga.org" target="_blank" rel="noopener noreferrer">
          <SvgAigaFullLogo />
        </a>
      </div>
      <div>
        <ul class="mb-8">
          <li v-for="page in footerPages" :key="page.id" class="mb-2">
            <nuxt-link :to="`/${page.slug}`" class="font-bold">
              {{ page.title }}
            </nuxt-link>
          </li>
        </ul>
        <h2 class="text-sm mb-2">Support Contacts</h2>
        <ul class="mb-6 lg:mb-0">
          <li v-for="contact in options.supportContacts" :key="contact.chapter" class="mb-2">
            {{ contact.chapter }} -
            <a :href="`mailto:${contact.email}`" class="font-mono font-normal">{{ contact.email }}</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col justify-between">
        <div class="mb-4">
          <a
            v-if="options.facebook"
            :href="`//facebook.com/${options.facebook}/`"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 inline-block mr-4"
          >
            <SvgFacebook />
          </a>
          <a
            v-if="options.instagram"
            :href="`//instagram.com/${options.instagram}/`"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 inline-block mr-4"
          >
            <SvgInstagram />
          </a>
          <a
            v-if="options.twitter"
            :href="`//twitter.com/${options.twitter}/`"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 inline-block mr-4"
          >
            <SvgTwitter />
          </a>
        </div>
        <div>
          <p>© {{ year }} AIGA Midwest Design Week</p>
          <p>
            Site designed and developed by
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

const FOOTER_QUERY = gql`
  query FOOTER_QUERY {
    pages(first: 100, after: null) {
      nodes {
        id
        slug
        isFrontPage
        title
      }
    }
    globalOptions {
      options {
        registrationLink
        supportContacts {
          chapter
          email
        }
        facebook
        instagram
        twitter
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
      options: [],
      year: new Date().getFullYear(),
    };
  },
  async fetch() {
    const client = this.$nuxt.context.app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: FOOTER_QUERY,
    });
    this.pages = data.pages.nodes;
    this.options = data.globalOptions.options;
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
