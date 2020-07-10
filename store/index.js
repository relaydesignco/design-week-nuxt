const siteURL = 'http://midwestdesignweekapi.local';
// const events = 'http://midwestdesignweekapi.local/wp-json/mwdw/v1/events';
// const sponsors = 'http://midwestdesignweekapi.local/wp-json/mwdw/v1/sponsors';

export const state = () => ({
  events: [],
  tags: [],
});

export const mutations = {
  updateEvents: (state, events) => {
    console.log(events);
    state.events = events;
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
        .map(({ id, slug, title, date, tags, content, link, acf }) => ({
          id,
          slug,
          title,
          date,
          tags,
          content,
          link,
          acf,
        }));

      commit('updateEvents', events);
    } catch (err) {
      console.error('getEvents', err);
    }
  },

  async getTags({ state, commit }) {
    if (state.tags.length) return;

    let allTags = state.events.reduce((acc, item) => {
      return acc.concat(item.tags);
    }, []);
    allTags = allTags.join();

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json());

      tags = tags.map(({ id, name }) => ({
        id,
        name,
      }));

      commit('updateTags', tags);
    } catch (err) {
      console.log(err);
    }
  },
};
