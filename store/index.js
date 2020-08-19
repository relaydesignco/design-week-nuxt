import axios from 'axios';
const siteURL = 'http://midwestdesignweekapi.local';

export const state = () => ({
  events: [],
  speakers: [],
  sponsors: [],
});

export const getters = {
  sortedEvents: (state) => {
    return state.events.slice().sort((a, b) => new Date(a.acf.start) - new Date(b.acf.start));
  },
};

export const mutations = {
  updateEvents: (state, events) => {
    state.events = events;
  },

  updateSpeakers: (state, speakers) => {
    state.speakers = speakers;
  },

  updateSponsors: (state, sponsors) => {
    state.sponsors = sponsors;
  },

  updateTags: (state, tags) => {
    state.tags = tags;
  },
};

export const actions = {
  async getEvents({ state, commit }) {
    if (state.events.length) return;

    try {
      let events = await axios
        .get(`${siteURL}/wp-json/wp/v2/events?page=1&per_page=100&_embed=1`)
        .then((res) => res.data);

      events = events.map(({ id, slug, title, content, acf }) => ({
        id,
        slug,
        title,
        content,
        acf,
      }));

      commit('updateEvents', events);
    } catch (err) {
      console.error('getEvents', err);
    }
  },

  async getSpeakers({ state, commit }) {
    if (state.speakers.length) return;

    try {
      let speakers = await axios
        .get(`${siteURL}/wp-json/wp/v2/speakers?page=1&per_page=100&_embed=1`)
        .then((res) => res.data);

      speakers = speakers.map(({ id, slug, title, content, acf }) => ({
        id,
        slug,
        title,
        content,
        acf,
      }));
      commit('updateSpeakers', speakers);
    } catch (err) {
      console.error('getSpeakers', err);
    }
  },

  async getSponsors({ state, commit }) {
    if (state.sponsors.length) return;

    try {
      let sponsors = await axios
        .get(`${siteURL}/wp-json/wp/v2/sponsors?page=1&per_page=100&_embed=1`)
        .then((res) => res.data);

      sponsors = sponsors.map(({ id, slug, title, acf }) => ({
        id,
        slug,
        title,
        acf,
      }));

      commit('updateSponsors', sponsors);
    } catch (err) {
      console.error('getSponsors', err);
    }
  },
};
