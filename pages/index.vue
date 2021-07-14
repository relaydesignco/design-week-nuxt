<template>
  <div class="p-8">
    <!-- opening blurb -->
    <section class="">
      <div class="" v-html="homePage.content"></div>
    </section>

    <!-- keynote highlight -->

    <!-- upcoming events -->
    <section class="">
      <div class="">
        <nuxt-link to="/events" class="">See Full Schedule </nuxt-link>
      </div>
    </section>

    <!-- email form -->

    <!-- sponsors -->
  </div>
</template>

<script>
import gql from 'graphql-tag';

const HOME_PAGE_QUERY = gql`
  query HOME_PAGE_QUERY {
    globalOptions {
      options {
        registrationLink
      }
    }
    page(id: "/home/", idType: URI) {
      id
      title
      content
    }
    events {
      nodes {
        id
        title
        content
        slug
        eventAcf {
          speaker
          start
          end
          type
          image {
            altText
            mediaItemUrl
          }
        }
      }
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
  name: 'Home',
  // get events, get sponsors,
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: HOME_PAGE_QUERY,
    });
    return {
      options: data.globalOptions.options,
      homePage: data.page,
      events: data.events.nodes,
      sponsors: data.sponsors.nodes,
    };
  },

  computed: {
    // upcomingEvents() {
    //   return this.events
    //     .slice()
    //     .sort((a, b) => new Date(a.eventAcf.start) - new Date(b.eventAcf.start))
    //     .filter((event) => this.$dateFns.isAfter(new Date(event.eventAcf.end), new Date()));
    // },
    // keynote() {
    //   return this.events.find((event) => event.eventAcf.is_keynote === true);
    // },
    // premier() {
    //   return this.sponsors.filter((sponsor) => sponsor.sponsorAcf.level === 'Premier');
    // },
    // notPremier() {
    //   return this.sponsors.filter((sponsor) => sponsor.sponsorAcf.level !== 'Premier');
    // },
  },

  created() {
    // console.log('EVENTS', this.events);
    // console.log('SPONSORS', this.sponsors);
    // console.log('OPTIONS', this.options);
    // console.log('HOMEPAGE', this.homePage);
  },
};
</script>

<style lang="postcss"></style>
