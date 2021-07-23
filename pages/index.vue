<template>
  <div>
    <div class="bg-black hero">
      <header>
        <div class="container mx-auto p-4 lg:p-8 flex justify-end items-center">
          <ButtonHamburger />
        </div>
      </header>
      <!-- hero -->
      <section class="px-8 pb-8">
        <div class="max-w-screen-lg mx-auto">
          <h2 class="uppercase text-2xl mb-3">October 11-15, 2021</h2>
          <img src="~/assets/images/mwdw-2021-logo.png" alt="MWDW" class="hero-logo mb-4" />
          <img src="~/assets/images/midwest-design-week-aiga.svg" alt="MWDW" class="w-64 ml-auto mb-16" />
          <div class="text-center mb-20">
            <a :href="options.registrationLink" target="_blank" rel="noopener noreferrer" class="btn btn-orange">
              Buy Tickets
            </a>
          </div>
          <div class="page-content max-w-xl mx-auto text-lg text-white" v-html="homePage.content"></div>
        </div>
      </section>
    </div>
    <!-- keynote highlight -->
    <!-- speakers -->
    <section class="p-4 lg:p-8 container mx-auto">
      <h1 class="text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">Our Speakers</h1>
      <Speakers :speakers="randomSpeakers" />
      <div class="text-center my-12">
        <NuxtLink to="/speakers" class="btn btn-orange"> Full Speaker List </NuxtLink>
      </div>
    </section>
    <!-- upcoming events -->
    <section class="bg-black p-4 lg:p-8 container mx-auto">
      <h1 class="text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">Calendar of Events</h1>
      <div class="text-center my-12">
        <nuxt-link to="/events" class="btn btn-orange">See Full Schedule </nuxt-link>
      </div>
    </section>
    <!-- email form -->
    <!-- sponsors -->
    <section class="p-4 lg:p-8 container mx-auto text-center">
      <h1 class="text-3xl mb-2 uppercase tracking-wide">We Love Our Sponsors</h1>
      <p class="text-lg mb-8 lg:mb-12">Please follow them, show some love, try out their products or services.</p>
      <Sponsors :sponsors="randomSponsors" />
    </section>
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
    speakers {
      nodes {
        id
        title
        lastName
        content
        slug
        speakerAcf {
          url
          jobTitle
          sessions {
            event {
              ... on Event {
                id
                title
                slug
              }
            }
          }
          image {
            altText
            mediaItemUrl
          }
        }
      }
    }
    events {
      nodes {
        id
        title
        content
        slug
        eventAcf {
          speakers {
            speaker {
              ... on Speaker {
                id
                title
                slug
              }
            }
          }
          otherSpeakers
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
  name: 'HomePage',
  layout: 'home',
  // get events, get sponsors,
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: HOME_PAGE_QUERY,
    });
    return {
      options: data.globalOptions.options,
      homePage: data.page,
      speakers: data.speakers.nodes,
      events: data.events.nodes,
      sponsors: data.sponsors.nodes,
    };
  },
  data() {
    return {
      randomSpeakers: [],
      randomSponsors: [],
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
    // randomSpeakers() {
    //   return [...this.speakers].sort(() => Math.random() - 0.5).slice(0, 3);
    // },
  },

  mounted() {
    this.randomSpeakers = [...this.speakers].sort(() => Math.random() - 0.5).slice(0, 3);
    this.randomSponsors = [...this.sponsors].sort(() => Math.random() - 0.5).slice(0, 6);
  },

  created() {
    // console.log('EVENTS', this.events);
    // console.log('SPONSORS', this.sponsors);
    // console.log('OPTIONS', this.options);
    // console.log('HOMEPAGE', this.homePage);
  },
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url(~/assets/images/bg-circles.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: -9rem -15rem;
}
.hero-logo {
  max-width: 102%;
}
</style>
