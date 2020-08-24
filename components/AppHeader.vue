<template>
  <header class="bg-offwhite">
    <transition
      name="slide-down"
      enter-active-class="animated slideInDown faster"
      leave-active-class="animated slideOutUp faster"
    >
      <app-nav v-if="navIsOpen" @close-nav="toggleNav()" />
    </transition>
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
        <svg-symbol-nav @toggle-nav="toggleNav()" />
      </div>
    </div>
  </header>
</template>

<script>
import SvgSymbolNav from '@/components/SvgSymbolNav';
import SvgLogo from '@/components/SvgLogo';
import SvgMwdw from '@/components/SvgMwdw';
import AppNav from '@/components/AppNav';

export default {
  name: 'AppHeader',
  components: {
    SvgLogo,
    SvgSymbolNav,
    SvgMwdw,
    AppNav,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      navIsOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
      console.log(this.navIsOpen);
    },
  },
};
</script>

<style lang="postcss" scoped></style>
