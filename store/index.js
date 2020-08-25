import axios from 'axios';

const cms = axios.create({
  baseURL: process.env.baseUrl,
});

export const state = () => ({
  events: [],
  speakers: [],
  sponsors: [],
  navIsOpen: false,
});

export const getters = {
  sortedEvents: (state) => {
    return state.events.slice().sort((a, b) => new Date(a.acf.start) - new Date(b.acf.start));
  },
};

export const mutations = {
  SET_EVENTS: (state, events) => {
    state.events = events;
  },

  SET_SPEAKERS: (state, speakers) => {
    state.speakers = speakers;
  },

  SET_SPONSORS: (state, sponsors) => {
    state.sponsors = sponsors;
  },

  SET_NAV_IS_OPEN: (state, status) => {
    state.navIsOpen = status;
  },
};

export const actions = {
  async getEvents({ state, commit }) {
    if (state.events.length) return;

    try {
      let events = await cms
        .get(`/wp-json/wp/v2/events?page=1&per_page=100&_embed=1`)
        .then((res) => res.data);

      events = events.map(({ id, slug, title, content, acf }) => ({
        id,
        slug,
        title,
        content,
        acf,
      }));

      commit('SET_EVENTS', events);
    } catch (err) {
      console.error('getEvents', err);
    }
  },

  async getSpeakers({ state, commit }) {
    if (state.speakers.length) return;

    try {
      let speakers = await cms
        .get(`/wp-json/wp/v2/speakers?page=1&per_page=100&_embed=1`)
        .then((res) => res.data);

      speakers = speakers.map(({ id, slug, title, content, acf }) => ({
        id,
        slug,
        title,
        content,
        acf,
      }));
      commit('SET_SPEAKERS', speakers);
    } catch (err) {
      console.error('getSpeakers', err);
    }
  },

  async getSponsors({ state, commit }) {
    if (state.sponsors.length) return;

    try {
      let sponsors = await cms
        .get(`/wp-json/wp/v2/sponsors?page=1&per_page=100&_embed=1`)
        .then((res) => res.data);

      sponsors = sponsors.map(({ id, slug, title, acf }) => ({
        id,
        slug,
        title,
        acf,
      }));

      commit('SET_SPONSORS', sponsors);
    } catch (err) {
      console.error('getSponsors', err);
    }
  },
};
