<template>
  <nav class="bg-black fixed inset-0 z-50">
    <div class="container mx-auto p-4 lg:p-8">
      <div class="text-right">
        <ButtonClose wide="6" @clicked="$nuxt.$emit('closeNav')" />
      </div>
      <div class="text-center">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.route">{{ link.name }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
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
a {
  @apply block mb-2 hover:text-orange-light transition-colors duration-200;
}
.nuxt-link-exact-active {
  @apply font-bold;
}
</style>
