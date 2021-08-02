<template>
  <header :class="[{ 'bg-black shadow-md': !hideElements }, 'fixed top-0 w-full z-30 transition duration-500']">
    <div class="container mx-auto px-4 lg:px-8 flex justify-between items-center h-16 lg:h-20">
      <transition name="page">
        <div v-show="!hideElements">
          <NuxtLink to="/">
            <img src="~/assets/images/mwdw-2021-logo-small.png" alt="MWDW" class="inline-block w-36 mr-2" />
          </NuxtLink>
          <span class="uppercase hidden lg:inline-block">Midwest Design Week</span>
        </div>
      </transition>
      <div class="ml-auto">
        <transition name="page">
          <a
            v-show="!hideElements"
            :href="registrationLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline hidden md:inline-block mr-16"
          >
            Buy Tickets
          </a>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    hideElements: {
      type: Boolean,
      default: false,
    },
    registrationLink: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      navIsOpen: false,
    };
  },
};
</script>

<style lang="postcss" scoped></style>
