<template>
  <div>
    <div class="bg-black hero">
      <header class="container mx-auto p-4 lg:p-8 flex justify-end items-center text-gray-light">
        <ButtonHamburger @clicked="$store.commit('SET_NAV_IS_OPEN', true)" />
      </header>
      <!-- hero -->
      <section class="px-4 lg:px-8 pb-8">
        <div class="max-w-screen-lg mx-auto">
          <h2 class="uppercase lg:text-2xl mb-1 lg:mb-3">October 11-15, 2021</h2>
          <img src="~/assets/images/mwdw-2021-logo.png" alt="MWDW" class="hero-logo mb-2 lg:mb-4" />
          <img
            src="~/assets/images/midwest-design-week-aiga.svg"
            alt="MWDW"
            class="w-32 lg:w-64 ml-auto mb-8 lg:mb-16"
          />
          <div class="text-center mb-10 lg:mb-20">
            <a :href="options.registrationLink" target="_blank" rel="noopener noreferrer" class="btn btn-orange">
              Buy Tickets
            </a>
          </div>
          <div class="page-content max-w-xl mx-auto lg:text-lg text-white text-center" v-html="homePage.content"></div>
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
    <section class="bg-black px-4 py-8 lg:py-16">
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
    <!-- stay in touch -->
    <section class="bg-black px-4 py-8 lg:py-16">
      <h1 class="text-3xl mb-4 lg:mb-12 uppercase tracking-wide text-center">Stay In Touch</h1>
      <div class="md:flex gap-8 max-w-screen-lg mx-auto">
        <img
          :src="homePage.featuredImage.node.sourceUrl"
          :alt="homePage.featuredImage.node.altText"
          class="w-80 h-60 object-cover mb-4 md:mb-0 mx-auto"
        />
        <div class="text-center lg:text-left">
          <p class="lg:text-lg mb-4 lg:mb-12">
            Sign up to become an AIGA Member, follow any of our chapters, or get updates about this MWDW Conference.
          </p>
          <a
            href="https://www.aiga.org/membership-community/aiga-membership"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-teal"
          >
            Join Today
          </a>
        </div>
      </div>
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
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
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
            sourceUrl(size: LARGE)
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
            sourceUrl(size: LARGE)
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
  name: 'HomePage',
  // get events, get sponsors,
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: HOME_PAGE_QUERY,
    });
    // console.log(data);
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
