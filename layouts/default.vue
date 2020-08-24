<template>
  <div>
    <app-header />
    <main class="overflow-hidden">
      <nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="postcss"></style>
