<template>
  <div class="pt-16 lg:pt-20 min-h-screen">
    <div class="px-4 lg:px-8 py-12 lg:py-16 relative">
      <div class="max-w-screen-xl mx-auto">
        <div class="absolute top-4">
          <NuxtLink to="/events" class="text-link">&lsaquo; Event Schedule</NuxtLink>
        </div>
        <div class="lg:flex gap-8">
          <img
            :src="event.eventAcf.image ? event.eventAcf.image.sourceUrl : '/icon.png'"
            :alt="event.eventAcf.image ? event.eventAcf.image.altText : 'AIGA logo'"
            class="w-full h-48 md:w-64 md:h-64 object-cover mb-4"
          />
          <div>
            <h1 class="font-bold text-2xl lg:text-4xl text-teal-light leading-tight mb-1">{{ event.title }}</h1>
            <h2 class="text-lg lg:text-xl font-normal mb-6 lg:mb-12">
              <span v-for="(speaker, index) in event.eventAcf.speakers" :key="speaker.speaker.id">
                <NuxtLink :to="`/speakers/${speaker.speaker.slug}`" class="text-link">
                  {{ speaker.speaker.title
                  }}<span v-if="index !== event.eventAcf.speakers.length - 1 || event.eventAcf.otherSpeakers">, </span>
                </NuxtLink>
              </span>
              <span v-if="event.eventAcf.otherSpeakers">{{ event.eventAcf.otherSpeakers }}</span>
            </h2>
            <h3 v-if="event.eventAcf.speaker" class="text-teal-light uppercase mb-2">Event Time</h3>
            <div class="mb-4 leading-tight">
              <time :datetime="event.eventAcf.start" class="text-lg lg:text-xl">
                {{ $dateFns.format(new Date(event.eventAcf.start)) }}
              </time>
              -
              <time :datetime="event.eventAcf.end" class="text-lg lg:text-xl">
                {{ $dateFns.format(new Date(event.eventAcf.end), "haaa 'EST'") }}
              </time>
              <br />
              <time class="text-lg lg:text-xl">
                {{ $dateFns.format($dateFns.sub(new Date(event.eventAcf.start), { hours: 1 }), 'haaa') }}
              </time>
              -
              <time class="text-lg lg:text-xl">
                {{ $dateFns.format($dateFns.sub(new Date(event.eventAcf.end), { hours: 1 }), "haaa 'CST'") }}
              </time>
            </div>
            <a
              :href="options.registrationLink"
              class="btn btn-teal mb-8 lg:mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
            <div v-html="event.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    event(id: $id, idType: SLUG) {
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
    globalOptions {
      options {
        registrationLink
      }
    }
  }
`;

export default {
  name: 'EventPage',
  transition: 'pageSlide',
  async asyncData({ app, params, error }) {
    const client = app.apolloProvider.defaultClient;
    try {
      const { data } = await client.query({
        query: SINGLE_EVENT_QUERY,
        variables: {
          id: params.slug,
        },
      });
      if (data.event == null) {
        throw new Error('That event was not found.');
      }
      // console.log(data.event);
      return {
        event: data.event,
        options: data.globalOptions.options,
      };
    } catch (err) {
      error({ statusCode: 404, message: err.message });
    }
  },
  head() {
    return {
      title: `Midwest Design Week | ${this.event.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Info about ${this.event.title}, an event at MWDW 2021`,
        },
      ],
    };
  },
};
</script>
