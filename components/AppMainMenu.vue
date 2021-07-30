<template>
  <div class="bg-black fixed inset-0 z-40 pt-12">
    <div class="container mx-auto p-4 lg:p-8">
      <div id="main-menu" class="text-center" role="menu">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.route" class="text-xl" role="menuitem">
          {{ link.name }}
        </NuxtLink>
        <a :href="registrationLink" target="_blank" rel="noopener noreferrer" class="btn-outline inline-block mt-6">
          Buy Tickets
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMainMenu',
  props: {
    registrationLink: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      links: [
        {
          route: '/',
          name: 'Home',
        },
        {
          route: '/about',
          name: 'About',
        },
        {
          route: '/events',
          name: 'Events',
        },
        {
          route: '/speakers',
          name: 'Speakers',
        },
        {
          route: '/sponsors',
          name: 'Sponsors',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
a:not(.btn-outline) {
  @apply block mb-2 hover:text-orange-light transition-colors duration-200;
}
.nuxt-link-exact-active {
  @apply font-bold;
}
</style>
