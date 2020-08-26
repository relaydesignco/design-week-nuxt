<template>
  <footer class="bg-dark p-6">
    <div class="max-w-screen-lg mx-auto text-sm text-white lg:flex justify-between">
      <a href="//aiga.org" target="_blank" rel="noopener noreferrer">
        <div class="w-24 mb-8 lg:mb-0">
          <svg-aiga-full-logo />
        </div>
      </a>
      <div class="text-xs lg:text-sm">
        <p>© {{ year }} AIGA Midwest Design Week</p>
        <p>
          site designed and developed by
          <a
            href="//relaydesign.co"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono font-bold text-base lg:text-lg"
            >relay design co.</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import SvgAigaFullLogo from '@/components/SvgAigaFullLogo';
export default {
  name: 'AppFooter',
  components: {
    SvgAigaFullLogo,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="postcss" scoped></style>
