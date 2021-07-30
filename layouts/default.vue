<template>
  <div
    :class="[
      { 'bg-black': isEventOrSpeaker },
      { squares: isEventOrSpeaker },
      'transition-colors duration-500 ease-in-out',
    ]"
  >
    <nav>
      <div class="text-gray-light fixed z-50 h-16 lg:h-20 flex items-center top-0 right-4 lg:right-8">
        <button
          class="w-8"
          aria-label="Menu"
          aria-controls="main-menu"
          :aria-expanded="$store.state.navIsOpen ? 'true' : 'false'"
          @click="$store.commit('TOGGLE_NAV_IS_OPEN')"
        >
          <SvgHamburger aria-hidden="true" />
        </button>
      </div>
      <transition name="nav">
        <AppMainMenu v-show="$store.state.navIsOpen" :registration-link="registrationLink" />
      </transition>
    </nav>
    <AppHeader :hide-elements="$route.path === '/' && !hasScrolled" :registration-link="registrationLink" />
    <main class="min-h-screen">
      <Nuxt />
    </main>
    <AppFooter :bg-transparent="isEventOrSpeaker" />
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
    isEventOrSpeaker() {
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
