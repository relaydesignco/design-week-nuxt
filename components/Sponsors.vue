<template>
  <div class="flex flex-wrap justify-around gap-4 md:gap-12 items-center max-w-2xl mx-auto mb-20">
    <div
      v-for="sponsor in sponsors"
      :key="sponsor.id"
      class="transform hover:scale-105 transition-transform duration-300 w-48"
    >
      <a :href="sponsor.sponsorAcf.url" target="_blank" rel="noopener noreferrer">
        <img :src="sponsor.sponsorAcf.image.sourceUrl" :alt="sponsor.sponsorAcf.image.altText" class="w-full" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  props: {
    sponsors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
