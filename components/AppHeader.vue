<template>
  <header class="bg-black">
    <div class="container mx-auto p-4 lg:p-8 flex justify-between items-center">
      <div>
        <NuxtLink to="/">
          <img src="~/assets/images/mwdw-2021-logo-small.png" alt="MWDW" class="inline-block w-36 mr-2" />
        </NuxtLink>
        <span class="uppercase text-lg hidden md:inline-block">Midwest Design Week</span>
      </div>
      <div>
        <a
          :href="registrationLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline hidden md:inline-block mr-8"
        >
          Buy Tickets
        </a>
        <ButtonHamburger @clicked="$store.commit('SET_NAV_IS_OPEN', true)" />
      </div>
    </div>
  </header>
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
  name: 'AppHeader',
  data() {
    return {
      registrationLink: '',
      navIsOpen: false,
    };
  },
  async fetch() {
    const client = this.$nuxt.context.app.apolloProvider.defaultClient;
    const { data } = await client.query({
      query: OPTIONS_QUERY,
    });
    this.registrationLink = data.globalOptions.options.registrationLink;
  },
};
</script>

<style lang="postcss" scoped></style>
