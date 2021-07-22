<template>
  <header class="bg-black">
    <div class="container mx-auto p-4 lg:p-8 flex justify-between items-center">
      <div>
        <NuxtLink to="/">
          <img src="~/assets/images/mwdw-2021-logo-small.png" alt="MWDW" class="inline-block w-36 mr-2" />
        </NuxtLink>
        <span class="uppercase text-lg hidden md:inline-block">Midwest Design Week</span>
      </div>
      <div>
        <a
          :href="registrationLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline hidden md:inline-block mr-8"
        >
          Buy Tickets
        </a>
        <ButtonHamburger />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    registrationLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
