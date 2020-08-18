const siteURL = 'http://midwestdesignweekapi.local';

export const state = () => ({
  events: [],
  speakers: [],
  sponsors: [],
});

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
  async getEvents({ state, commit, dispatch }) {
    if (state.events.length) return;

    try {
      let events = await fetch(
        `${siteURL}/wp-json/wp/v2/events?page=1&per_page=100&_embed=1`
      ).then((res) => res.json());

      events = events
        // .filter((el) => el.status === 'publish')
        .map(({ id, slug, title, content, acf }) => ({
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

  async getSpeakers({ state, commit, dispatch }) {
    if (state.speakers.length) return;

    try {
      let speakers = await fetch(
        `${siteURL}/wp-json/wp/v2/speakers?page=1&per_page=100&_embed=1`
      ).then((res) => res.json());

      speakers = speakers
        // .filter((el) => el.status === 'publish')
        .map(({ id, slug, title, content, acf }) => ({
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

  async getSponsors({ state, commit, dispatch }) {
    if (state.sponsors.length) return;

    try {
      let sponsors = await fetch(
        `${siteURL}/wp-json/wp/v2/sponsors?page=1&per_page=100&_embed=1`
      ).then((res) => res.json());

      sponsors = sponsors
        // .filter((el) => el.status === 'publish')
        .map(({ id, slug, title, acf }) => ({
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

  // async getTags({ state, commit }) {
  //   if (state.tags.length) return;

  //   let allTags = state.events.reduce((acc, item) => {
  //     return acc.concat(item.tags);
  //   }, []);
  //   allTags = allTags.join();

  //   try {
  //     let tags = await fetch(
  //       `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
  //     ).then((res) => res.json());

  //     tags = tags.map(({ id, name }) => ({
  //       id,
  //       name,
  //     }));

  //     commit('updateTags', tags);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};
