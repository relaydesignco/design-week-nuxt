<template>
  <nav class="bg-black fixed inset-0 z-40" :aria-expanded="isOpen">
    <div class="container mx-auto p-4 lg:p-8">
      <div class="text-center">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.route" class="text-xl">{{ link.name }}</NuxtLink>
      </div>
      <div class="my-10 text-center">
        <a :href="registrationLink" target="_blank" rel="noopener noreferrer" class="btn-outline"> Buy Tickets </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    registrationLink: {
      type: String,
      required: true,
    },
    isOpen: {
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
