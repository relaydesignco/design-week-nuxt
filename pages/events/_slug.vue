<template>
  <div class="px-4 lg:px-8 py-16 lg:py-20 bg-black relative">
    <div class="absolute right-4 lg:right-8 top-4 lg:top-8 p-1 w-6">
      <CloseButton to-route="/events" />
    </div>
    <div class="lg:flex gap-8">
      <img
        :src="event.eventAcf.image ? event.eventAcf.image.mediaItemUrl : '/icon.png'"
        :alt="event.eventAcf.image ? event.eventAcf.image.altText : 'AIGA logo'"
        class="w-64 h-64 object-cover mb-4"
      />
      <div class="">
        <h1 class="font-bold text-4xl text-teal-light leading-tight mb-2">{{ event.title }}</h1>
        <h2 v-if="event.eventAcf.speaker" class="text-lg font-normal mb-12">{{ event.eventAcf.speaker }}</h2>
        <h3 v-if="event.eventAcf.speaker" class="text-teal-light uppercase">Event Time</h3>
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
    globalOptions {
      options {
        registrationLink
      }
    }
  }
`;

export default {
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: SINGLE_EVENT_QUERY,
      variables: {
        id: params.slug,
      },
    });
    return {
      event: data.event,
      options: data.globalOptions.options,
    };
  },
};
</script>
