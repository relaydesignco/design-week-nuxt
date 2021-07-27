export const state = () => ({
  navIsOpen: false,
});

export const mutations = {
  SET_NAV_IS_OPEN(state, payload) {
    state.navIsOpen = payload;
  },
};
