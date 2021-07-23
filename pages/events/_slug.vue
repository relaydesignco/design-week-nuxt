<template>
  <div class="px-4 lg:px-8 py-16 lg:py-20 bg-black relative">
    <div class="absolute right-4 lg:right-8 top-4 lg:top-8 p-1 w-6">
      <ButtonClose to-route="/events" />
    </div>
    <div class="lg:flex gap-8">
      <img
        :src="event.eventAcf.image ? event.eventAcf.image.mediaItemUrl : '/icon.png'"
        :alt="event.eventAcf.image ? event.eventAcf.image.altText : 'AIGA logo'"
        class="w-64 h-64 object-cover mb-4"
      />
      <div>
        <h1 class="font-bold text-4xl text-teal-light leading-tight mb-1">{{ event.title }}</h1>
        <h2 class="text-lg font-normal mb-12">
          <span v-for="(speaker, index) in event.eventAcf.speakers" :key="speaker.speaker.id">
            <NuxtLink :to="`/speakers/${speaker.speaker.slug}`" class="text-link">
              {{ speaker.speaker.title
              }}<span v-if="index !== event.eventAcf.speakers.length - 1 || event.eventAcf.otherSpeakers">, </span>
            </NuxtLink>
          </span>
          <span v-if="event.eventAcf.otherSpeakers">{{ event.eventAcf.otherSpeakers }}</span>
        </h2>
        <h3 v-if="event.eventAcf.speaker" class="text-teal-light uppercase mb-2">Event Time</h3>
        <div class="mb-4">
          <time :datetime="event.eventAcf.start" class="text-lg">
            {{ $dateFns.format(new Date(event.eventAcf.start)) }}
          </time>
          -
          <time :datetime="event.eventAcf.end" class="text-lg">
            {{ $dateFns.format(new Date(event.eventAcf.end), 'haaa') }}
          </time>
        </div>
        <a
          :href="options.registrationLink"
          class="btn-sm lg:btn btn-teal mb-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
        <div v-html="event.content" />
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
          mediaItemUrl
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
};
</script>
