export const state = () => ({
  navIsOpen: false,
});

export const mutations = {
  SET_NAV_IS_OPEN(state, payload) {
    state.navIsOpen = payload;
  },
  TOGGLE_NAV_IS_OPEN(state) {
    state.navIsOpen = !state.navIsOpen;
  },
};
