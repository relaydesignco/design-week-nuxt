<template>
  <footer class="bg-dark p-6">
    <div class="max-w-screen-lg mx-auto text-white lg:flex justify-between">
      <a href="//aiga.org" target="_blank" rel="noopener noreferrer">
        <div class="w-24 mb-8 lg:mb-0">
          <svg-aiga-full-logo />
        </div>
      </a>
      <div>
        <ul class="mb-4 lg:mb-8 text-base">
          <li v-for="page in pages" :key="page.id" class="mb-2">
            <nuxt-link :to="`/${page.slug}`" class="text-white hover:text-blue-light font-mono text-base lg:text-lg">
              {{ page.title.rendered }}
            </nuxt-link>
          </li>
        </ul>
        <h2 class="text-lg mb-2">Support Contacts</h2>
        <ul class="mb-6 text-base lg:mb-0">
          <li class="mb-2">
            Cincinnati -
            <a
              href="mailto:communications@aigacincinnati.org"
              class="text-white hover:text-blue-light font-mono font-normal"
            >
              communications@aigacincinnati.org</a
            >
          </li>
          <li class="mb-2">
            Indianapolis -
            <a
              href="mailto:president@indianapolis.aiga.org"
              class="text-white hover:text-blue-light font-mono font-normal"
            >
              president@indianapolis.aiga.org</a
            >
          </li>
          <li class="mb-2">
            Louisville -
            <a href="mailto:contact@aigalou.org" class="text-white hover:text-blue-light font-mono font-normal">
              contact@aigalou.org
            </a>
          </li>
          <li class="mb-2">
            Toledo -
            <a href="mailto:president@toledo.aiga.org" class="text-white hover:text-blue-light font-mono font-normal">
              president@toledo.aiga.org
            </a>
          </li>
        </ul>
      </div>
      <div class="text-xs lg:text-sm flex flex-col justify-between">
        <a href="//facebook.com/MidwestDesignWeek/" target="_blank" rel="noopener noreferrer" class="w-12 block mb-4">
          <svg-facebook />
        </a>
        <div>
          <p>© {{ year }} AIGA Midwest Design Week</p>
          <p>
            site designed and developed by
            <a
              href="//relaydesign.co"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-base lg:text-lg text-blue-light"
              >relay design co.</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {
    pages() {
      const noRender = ['home', 'sponsorship'];
      return this.$store.state.pages.filter((page) => !noRender.includes(page.slug));
    },
  },
};
</script>

<style lang="postcss" scoped></style>
