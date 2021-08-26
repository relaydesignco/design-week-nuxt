<template>
  <div class="bg-black circles">
    <div class="pt-16 lg:pt-20">
      <!-- hero -->
      <section class="px-4 lg:px-8 pb-8">
        <div class="max-w-screen-lg mx-auto">
          <h1 class="uppercase lg:text-2xl mb-1 lg:mb-3">October 11-15, 2021</h1>
          <img
            src="/images/mwdw-2021-logo.png"
            alt="MWDW 2021 logo"
            class="hero-logo mb-2 lg:mb-4 max-w-[102%]"
            width="1044.47"
            height="229.78"
          />
          <img
            src="/images/midwest-design-week-aiga.svg"
            alt="Midwest Design Week 2021"
            class="w-32 lg:w-64 ml-auto mb-8 lg:mb-16"
            width="400"
            height="80.22"
          />
          <div class="text-center mb-10 lg:mb-20">
            <a
              :href="options.registrationLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-orange mb-3 lg:mb-0 lg:mr-3"
            >
              Buy Tickets
            </a>
            <NuxtLink to="/events" class="btn btn-orange"> View Schedule </NuxtLink>
          </div>
          <div class="page-content max-w-xl mx-auto lg:text-lg text-white text-center" v-html="homePage.content"></div>
          <p class="text-white lg:text-lg font-bold text-center">
            Learn more on our <NuxtLink to="/about" class="text-link">About Page.</NuxtLink>
          </p>
        </div>
      </section>
    </div>
    <!-- keynote highlight -->
    <!-- speakers -->
    <section class="bg-white">
      <div class="px-4 py-8 lg:py-12 container mx-auto">
        <h2 class="text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">Our Speakers</h2>
        <Speakers :speakers="randomSpeakers" />
        <div class="text-center mt-12">
          <NuxtLink to="/speakers" class="btn btn-orange"> Full Speaker List </NuxtLink>
        </div>
      </div>
    </section>
    <!-- upcoming events -->
    <section class="px-4 py-8 lg:py-14">
      <h2 class="text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">Upcoming Events</h2>
      <div class="max-w-screen-lg mx-auto">
        <EventCard v-for="event in upcomingEvents" :key="event.id" :event="event" :options="options" />
      </div>
      <div class="text-center mt-8">
        <nuxt-link to="/events" class="btn btn-orange">See Full Schedule </nuxt-link>
      </div>
    </section>
    <!-- sponsors -->
    <section class="bg-white">
      <div class="px-4 py-8 lg:py-12 container mx-auto text-center">
        <h2 class="text-3xl mb-2 uppercase tracking-wide">We Love Our Sponsors</h2>
        <p class="lg:text-lg mb-8 lg:mb-12">Please follow them, show some love, try out their products or services.</p>
        <Sponsors :sponsors="sponsors.filter((sponsor) => sponsor.sponsorAcf.level === 'Premier')" />
        <p class="text-gray-dark font-bold mb-8 lg:mb-12">
          Interested in becoming a Sponsor? We’d love that.
          <br />
          Learn how on our
          <NuxtLink to="/sponsors#sponsorship" class="text-link">Sponsorship Page.</NuxtLink>
        </p>
        <div class="text-center mt-12">
          <nuxt-link to="/sponsors" class="btn btn-orange">See All Sponsors </nuxt-link>
        </div>
      </div>
    </section>
    <!-- stay in touch -->
    <section class="px-4 py-8 lg:py-14 max-w-screen-lg mx-auto">
      <h2 class="text-3xl mb-4 lg:mb-12 uppercase tracking-wide text-center">Stay In Touch</h2>
      <div class="md:flex gap-8 items-center">
        <img
          :src="homePage.featuredImage.node.sourceUrl"
          :alt="homePage.featuredImage.node.altText"
          class="w-80 h-60 object-cover mb-4 md:mb-0 mx-auto"
        />
        <div class="text-center lg:text-left">
          <p class="lg:text-lg mb-4 lg:mb-8">
            Receive exclusive benefits and help support a network of creative changemakers, problem solvers, and design
            industry leaders.
          </p>
          <a
            href="https://www.aiga.org/membership-community/aiga-membership"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block btn-outline"
          >
            Join AIGA
          </a>
        </div>
      </div>
      <div class="pt-12 pb-8 lg:px-16 lg:pt-12">
        <h3 class="mb-4 lg:text-lg uppercase tracking-wide">Get Conference Updates</h3>
        <EmailForm />
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
          altText
          sourceUrl(size: LARGE)
        }
      }
    }
    speakers(first: 100, after: null) {
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
    events(first: 100, after: null) {
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
  name: 'HomePage',
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
      // randomSponsors: [],
      upcomingEvents: [],
    };
  },

  mounted() {
    this.randomSpeakers = [...this.speakers].sort(() => Math.random() - 0.5).slice(0, 3);
    // this.randomSponsors = [...this.sponsors].sort(() => Math.random() - 0.5).slice(0, 6);
    this.upcomingEvents = this.events
      .filter((event) => this.$dateFns.isAfter(new Date(event.eventAcf.end), new Date()))
      .sort((a, b) => new Date(a.eventAcf.start) - new Date(b.eventAcf.start))
      .slice(0, 3);
  },
};
</script>

<style lang="postcss" scoped>
.circles {
  background-image: url(~/assets/images/bg-circles.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: -9rem -15rem;
}

.bg-white {
  @apply text-black;
}
</style>
