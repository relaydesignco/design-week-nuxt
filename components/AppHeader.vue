<template>
  <!-- regular page header -->
  <header class="bg-offwhite">
    <transition
      name="slide-down"
      enter-active-class="animated slideInDown faster"
      leave-active-class="animated slideOutUp faster"
    >
      <app-nav v-if="navIsOpen" @close-nav="SET_NAV_IS_OPEN(!navIsOpen)" />
    </transition>
    <template v-if="!isHomePage">
      <div class="flex justify-between items-center">
        <div class="grid grid-cols-3 gap-1 lg:gap-4 items-center ml-4 lg:ml-12">
          <ul
            class="uppercase text-xxs lg:text-base tracking-wider font-bold text-right font-mono leading-tight"
          >
            <li>Cincinnati</li>
            <li>Indianapolis</li>
            <li>Louisville</li>
            <li>Toledo</li>
          </ul>
          <div class="w-16 lg:w-32 mx-auto">
            <nuxt-link to="/">
              <svg-logo />
            </nuxt-link>
          </div>
          <div class="w-20 lg:w-40">
            <svg-mwdw />
          </div>
        </div>
        <div class="w-20 lg:w-48 z-50">
          <svg-symbol-nav @toggle-nav="SET_NAV_IS_OPEN(!navIsOpen)" />
        </div>
      </div>
    </template>

    <!-- landing page header -->
    <template v-else>
      <div class="p-6 md:p-16 relative">
        <div class="absolute top-0 right-0 w-20 lg:w-48 z-50">
          <svg-symbol-nav @toggle-nav="SET_NAV_IS_OPEN(!navIsOpen)" />
        </div>
        <div class="w-9/12 lg:w-8/12">
          <svg-title />
        </div>
        <div class="flex justify-between items-center flex-wrap mt-3 md:mt-8 mb-4 md:mb-20">
          <h1
            class="font-mono font-normal text-xs md:text-3xl xl:text-4xl uppercase leading-tight tracking-widest mb-3 md:mb-0"
          >
            A Virtual Design Conference_
          </h1>
          <time class="text-3xl xl:text-4xl font-mono font-bold tracking-wide block">
            09/21-25/2020
          </time>
        </div>
        <div class="grid grid-cols-1fr3 lg:gap-4 items-center md:w-3/4 lg:w-8/12 mx-auto md:mb-12">
          <ul
            class="uppercase text-xxs md:text-sm lg:text-base tracking-wider font-bold text-right font-mono"
          >
            <li>Cincinnati</li>
            <li>Indianapolis</li>
            <li>Louisville</li>
            <li>Toledo</li>
          </ul>
          <div class="w-16 md:w-32 mx-auto">
            <svg-logo />
          </div>
          <div class="w-36 md:w-80">
            <svg-hashtag />
          </div>
        </div>
        <div class="w-full text-center mt-4">
          <a href="" class="btn-sm lg:btn bg-blue hover:bg-blue-dark lg:text-3xl">Tickets</a>
        </div>
      </div>
    </template>
  </header>
</template>

<script>
import SvgSymbolNav from '@/components/SvgSymbolNav';
import SvgLogo from '@/components/SvgLogo';
import SvgMwdw from '@/components/SvgMwdw';
import AppNav from '@/components/AppNav';
import SvgTitle from '@/components/SvgTitle';
import SvgHashtag from '@/components/SvgHashtag';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AppHeader',
  components: {
    SvgLogo,
    SvgSymbolNav,
    SvgMwdw,
    AppNav,
    SvgTitle,
    SvgHashtag,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },

  computed: {
    ...mapState(['navIsOpen']),

    isHomePage() {
      return this.$nuxt.$route.path === '/';
    },
  },

  methods: {
    ...mapMutations(['SET_NAV_IS_OPEN']),
  },
};
</script>

<style lang="postcss" scoped></style>
