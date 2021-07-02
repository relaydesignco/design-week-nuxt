<template>
  <nav class="px-10 py-20 lg:px-32 lg:py-40 mx-auto w-screen h-screen bg-black bg-opacity-90 fixed z-40 top-0 left-0">
    <ul class="text-4xl lg:text-6xl font-mono font-bold tracking-wide">
      <transition appear appear-active-class="animated fadeInDown fast delay-5">
        <li @click="$emit('close-nav')">
          <nuxt-link to="/" class="text-white">Home_</nuxt-link>
        </li>
      </transition>
      <transition appear appear-active-class="animated fadeInDown fast delay-4">
        <li @click="$emit('close-nav')">
          <nuxt-link exact to="/events" class="text-white">Events_</nuxt-link>
        </li>
      </transition>
      <transition appear appear-active-class="animated fadeInDown fast delay-3">
        <li @click="$emit('close-nav')">
          <nuxt-link to="/speakers" class="text-white">Speakers_</nuxt-link>
        </li>
      </transition>
      <transition appear appear-active-class="animated fadeInDown fast delay-2">
        <li @click="$emit('close-nav')">
          <nuxt-link to="/sponsors" class="text-white">Sponsors_</nuxt-link>
        </li>
      </transition>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          route: '/',
          name: 'Home_',
        },
        {
          route: '/events',
          name: 'Events_',
        },
        {
          route: '/speakers',
          name: 'Speakers_',
        },
        {
          route: '/sponsorship',
          name: 'Sponsors_',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
