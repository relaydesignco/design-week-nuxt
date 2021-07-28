<template>
  <div
    :class="[
      { 'bg-black': $store.state.bgIsDark },
      { squares: makeFooterTransparent },
      'transition-colors duration-500 ease-in-out',
    ]"
  >
    <transition name="nav">
      <AppNav v-if="$store.state.navIsOpen" :registration-link="registrationLink" />
    </transition>
    <transition name="slideDownUp">
      <AppHeader :hide-elements="$route.path === '/' && !hasScrolled" :registration-link="registrationLink" />
    </transition>
    <main class="min-h-screen transition-colors duration-500 ease-in-out">
      <Nuxt />
    </main>
    <transition name="slideUpDown">
      <AppFooter :bg-transparent="makeFooterTransparent" />
    </transition>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const OPTIONS_QUERY = gql`
  query OPTIONS_QUERY {
    globalOptions {
      options {
        registrationLink
      }
    }
  }
`;

export default {
  data() {
    return {
      hasScrolled: false,
      registrationLink: '',
    };
  },
  async fetch() {
    const client = this.$nuxt.context.app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: OPTIONS_QUERY,
    });
    this.registrationLink = data.globalOptions.options.registrationLink;
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.navIsOpen ? 'overflow-hidden' : '',
      },
    };
  },
  computed: {
    makeFooterTransparent() {
      return this.$route.path.includes('/speakers/') || this.$route.path.includes('/events/');
    },
  },
  watch: {
    // close nav on route change
    $route() {
      this.$store.commit('SET_NAV_IS_OPEN', false);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 650) {
        // console.log('over 650');
        this.hasScrolled = true;
      } else {
        // console.log('under 650');
        this.hasScrolled = false;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.squares {
  background-image: url(~/assets/images/bg-squares.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 8rem;
}
</style>
