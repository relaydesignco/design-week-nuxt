<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-screen-lg mx-auto">
    <article v-for="speaker in speakers" :key="speaker.id" class="text-center">
      <NuxtLink :to="`/speakers/${speaker.slug}`">
        <img
          :src="speaker.speakerAcf.image.sourceUrl"
          :alt="speaker.speakerAcf.image.altText"
          class="w-48 h-48 object-cover mx-auto mb-2 lg:mb-3"
        />
        <h2 class="text-lg leading-7">{{ speaker.title }}</h2>
        <h3 class="font-normal">{{ speaker.speakerAcf.jobTitle }}</h3>
      </NuxtLink>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Speakers',
  props: {
    speakers: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
