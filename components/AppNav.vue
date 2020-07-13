<template>
  <nav class="p-4 max-w-screen-xl mx-auto mb-8">
    <ul class="flex justify-between items-center">
      <li>
        <nuxt-link exact to="/" class="flex items-center"
          ><app-icon class="mr-2" />Events</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/speakers">Speakers</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sponsors">Sponsors</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue';

export default {
  components: {
    AppIcon,
  },
};
</script>

<style scoped></style>
