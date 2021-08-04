<template>
  <div class="pt-16 lg:pt-20 min-h-screen">
    <div class="px-4 lg:px-8 py-16 relative">
      <div class="max-w-screen-xl mx-auto">
        <div class="absolute right-4 lg:right-8 top-4 lg:top-8 p-1 w-6">
          <LinkClose :to-route="$nuxt.context.from || '/speakers'" />
        </div>
        <div class="lg:flex gap-8">
          <img
            :src="speaker.speakerAcf.image ? speaker.speakerAcf.image.sourceUrl : '/icon.png'"
            :alt="speaker.speakerAcf.image ? speaker.speakerAcf.image.altText : 'AIGA logo'"
            class="w-64 h-64 object-cover mb-4"
          />
          <div>
            <h1 class="font-bold text-2xl lg:text-4xl text-teal-light leading-tight mb-1">
              <a
                v-if="speaker.speakerAcf.url"
                :href="speaker.speakerAcf.url"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-orange-light transition-colors duration-300"
              >
                {{ speaker.title }}
              </a>
              <span v-else>{{ speaker.title }}</span>
            </h1>
            <h2 v-if="speaker.speakerAcf.jobTitle" class="text-lg font-normal mb-8 lg:mb-12">
              {{ speaker.speakerAcf.jobTitle }}
            </h2>
            <template v-if="speaker.speakerAcf.sessions">
              <h3 class="text-teal-light uppercase mb-2">Sessions</h3>
              <ul class="mb-8 lg:mb-12">
                <li v-for="event in speaker.speakerAcf.sessions" :key="event.event.id">
                  <NuxtLink :to="`/events/${event.event.slug}`" class="text-link">{{ event.event.title }}</NuxtLink>
                </li>
              </ul>
            </template>
            <div class="page-content" v-html="speaker.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const SINGLE_SPEAKER_QUERY = gql`
  query SINGLE_SPEAKER_QUERY($id: ID!) {
    speaker(id: $id, idType: SLUG) {
      id
      title
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
`;

export default {
  name: 'SpeakerPage',
  transition: 'pageSlide',
  async asyncData({ app, params, error }) {
    const client = app.apolloProvider.defaultClient;
    try {
      const { data } = await client.query({
        query: SINGLE_SPEAKER_QUERY,
        variables: {
          id: params.slug,
        },
      });
      if (data.speaker == null) {
        throw new Error('That speaker was not found.');
      }
      // console.log(data.speaker);
      return { speaker: data.speaker };
    } catch (err) {
      error({ statusCode: 404, message: err.message });
    }
  },
  head() {
    return {
      title: `Midwest Design Week | ${this.speaker.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Info about ${this.speaker.title}, a speaker at MWDW 2021`,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
