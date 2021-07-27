export const state = () => ({
  navIsOpen: false,
  bgIsDark: false,
});

export const mutations = {
  SET_NAV_IS_OPEN(state, payload) {
    state.navIsOpen = payload;
  },
  SET_BG_IS_DARK(state, payload) {
    state.bgIsDark = payload;
  },
};
