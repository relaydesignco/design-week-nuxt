<template>
  <div class="pt-20 lg:pt-28 px-4 lg:px-8 pb-8">
    <h1 class="text-2xl lg:text-3xl mb-8 lg:mb-12 uppercase text-center tracking-wide">Welcome to the Main Event</h1>
    <div class="aspect-w-16 aspect-h-9 w-full">
      <iframe
        width="1280"
        height="720"
        src="https://primetime.bluejeans.com/a2m/embeds/attendee?sharingID=tzjahkpx&captureUserDetails=true&applyCustomization=true&launchFullExperience=true"
        frameborder="0"
        encrypted-media
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      name: 'MainEventPage',
      title: `Midwest Design Week | Main Event`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Midwest Design Week 2021 Main Event`,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped></style>
