<template>
  <div class="p-4 lg:p-8">
    <h1 class="text-3xl mb-8 lg:mb-16 uppercase text-center tracking-wide">Event Schedule</h1>

    <div v-for="day in days" :key="day.date" class="lg:grid grid-cols-4 gap-4 mb-8">
      <h2 class="col-span-1 mb-4 text-2xl">
        {{ day.name }}
        <br />
        10/{{ day.date }}
      </h2>
      <div class="col-span-3">
        <EventCard
          v-for="event in events.filter((e) => $dateFns.format(new Date(e.eventAcf.start), 'cccc') === day.name)"
          :key="event.id"
          :event="event"
          :options="options"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const EVENTS_QUERY = gql`
  query EVENTS_QUERY {
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
    globalOptions {
      options {
        registrationLink
      }
    }
  }
`;

export default {
  name: 'Events',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: EVENTS_QUERY,
    });
    return {
      events: data.events.nodes,
      options: data.globalOptions.options,
    };
  },
  data() {
    return {
      days: [
        {
          name: 'Monday',
          date: '11',
        },
        {
          name: 'Tuesday',
          date: '12',
        },
        {
          name: 'Wednesday',
          date: '13',
        },
        {
          name: 'Thursday',
          date: '14',
        },
        {
          name: 'Friday',
          date: '15',
        },
      ],
    };
  },
  created() {
    console.log(this.events);
    console.log(this.options);
  },
};
</script>

<style></style>
