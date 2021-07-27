<template>
  <div>
    <transition enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
      <AppNav v-if="$store.state.navIsOpen" />
    </transition>
    <AppHeader v-if="$route.path !== '/'" />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.navIsOpen ? 'overflow-hidden' : '',
      },
    };
  },
  watch: {
    // close nav on route change
    $route() {
      this.$store.commit('SET_NAV_IS_OPEN', false);
    },
  },
};
</script>
