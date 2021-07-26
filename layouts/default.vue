<template>
  <div class="relative">
    <transition enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
      <AppNav v-if="navIsOpen" />
    </transition>
    <AppHeader v-if="$route.path !== '/'" />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIsOpen: false,
    };
  },
  watch: {
    // close nav on route change
    $route() {
      this.navIsOpen = false;
    },
  },
  created() {
    this.$nuxt.$on('openNav', () => {
      this.navIsOpen = true;
    });
    this.$nuxt.$on('closeNav', () => {
      this.navIsOpen = false;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('openNav');
    this.$nuxt.$off('closeNav');
  },
};
</script>

<style lang="scss" scoped></style>
