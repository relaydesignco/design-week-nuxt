<template>
  <header class="bg-offwhite relative">
    <transition
      name="slide-down"
      enter-active-class="animated slideInDown faster"
      leave-active-class="animated slideOutUp faster"
    >
      <app-nav v-if="navIsOpen" @close-nav="SET_NAV_IS_OPEN(!navIsOpen)" />
    </transition>

    <!-- regular page header -->
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
      <!-- intro animation -->
      <div v-if="isIntro" :class="['absolute inset-x-0 top-1/2 transform -translate-y-1/2']">
        <svg-animated-logo @intro-over="onIntroOver" />
      </div>

      <div
        :class="['px-6 pb-6 pt-10 lg:px-16 lg:pb-16 lg:pt-24 min-h-16x9', { invisible: isIntro }]"
      >
        <div class="absolute top-0 right-0 w-20 lg:w-48 z-50">
          <svg-symbol-nav @toggle-nav="SET_NAV_IS_OPEN(!navIsOpen)" />
        </div>
        <div class="w-9/12 lg:w-8/12">
          <svg-title />
        </div>
        <div class="flex justify-between items-center flex-wrap mt-3 md:mt-8 mb-4 lg:mb-24">
          <h1
            id="subtitle"
            ref="subtitle"
            class="font-mono font-normal text-xs md:text-3xl xl:text-4xl uppercase leading-tight tracking-widest mb-3 md:mb-0"
          >
            A Virtual Design Conference_
          </h1>
          <time
            id="subdate"
            ref="subdate"
            class="text-2xl md:text-3xl xl:text-4xl font-mono font-bold tracking-wide block"
          >
            09/21-25/2020
          </time>
        </div>

        <div
          class="grid grid-cols-1fr3 lg:gap-4 items-center md:w-3/4 lg:w-8/12 mx-auto md:mb-12 lg:mb-20"
        >
          <ul
            class="uppercase text-xxs md:text-sm lg:text-base tracking-wider font-bold text-right font-mono"
          >
            <li id="cin" ref="cin" class="cities">Cincinnati</li>
            <li id="ind" ref="ind" class="cities">Indianapolis</li>
            <li id="lou" ref="lou" class="cities">Louisville</li>
            <li id="tol" ref="tol" class="cities">Toledo</li>
          </ul>

          <div id="logo" ref="logo" class="w-16 md:w-32 mx-auto">
            <svg-logo />
          </div>

          <div id="hash" ref="hash" class="w-36 md:w-80">
            <svg-hashtag ref="hash" />
          </div>
        </div>

        <div ref="ticketsWrap" class="w-full text-center mt-4">
          <a
            id="tickets"
            ref="tickets"
            :href="options.register_link"
            class="btn-sm lg:btn bg-blue hover:bg-blue-dark lg:text-3xl lg:px-6"
          >
            Tickets
          </a>
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
import SvgAnimatedLogo from '@/components/SvgAnimatedLogo';
import { mapState, mapMutations } from 'vuex';
import { gsap } from 'gsap';

export default {
  name: 'AppHeader',
  components: {
    SvgLogo,
    SvgSymbolNav,
    SvgMwdw,
    AppNav,
    SvgTitle,
    SvgHashtag,
    SvgAnimatedLogo,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      isIntro: true,
    };
  },

  computed: {
    ...mapState(['navIsOpen', 'options']),

    isHomePage() {
      return this.$nuxt.$route.path === '/';
    },
  },

  mounted() {
    gsap.set(['#symbolNav .square', '#hamburger', '#hamburger-close'], { visibility: 'hidden' });
    this.animateHeader();
  },

  methods: {
    ...mapMutations(['SET_NAV_IS_OPEN']),

    onIntroOver() {
      this.isIntro = false;
      this.animateHeader();
    },

    animateHeader() {
      const that = this;
      const tl = gsap.timeline({
        defaults: { duration: 0.8 },
        onComplete() {
          that.finish();
        },
      });

      tl.from('.cities', { autoAlpha: 0, y: '150%', stagger: 0.1 });
      tl.from(
        this.$refs.logo,
        { autoAlpha: 0, scale: 0.5, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.6'
      );
      tl.from(this.$refs.hash, { autoAlpha: 0, x: '50%', ease: 'back.out(1.5)' }, '-=0.4');
      tl.addLabel('button');
      tl.from(
        this.$refs.tickets,
        { autoAlpha: 0, rotateX: 90, duration: 1, ease: 'back.out(4)' },
        '-=0.2'
      );
      tl.from(
        '#midwest .square',
        {
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            amount: 1,
            from: 'center',
            grid: [2, 2],
            ease: 'power2.in',
          },
          ease: 'power1.inOut',
        },
        'button'
      );
      tl.from(
        '#design .square',
        {
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            amount: 1,
            from: 'random',
            grid: 'auto',
            ease: 'power2.in',
          },
          ease: 'power1.inOut',
        },
        'button+=0.5'
      );
      tl.from(
        '#week .square',
        {
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            amount: 1,
            from: 'random',
            grid: 'auto',
            ease: 'power2.in',
          },
          ease: 'power1.inOut',
        },
        'button+=1'
      );
      tl.from(this.$refs.subtitle, { autoAlpha: 0, y: '100%' }, '-=1.4');
      tl.from(this.$refs.subdate, { autoAlpha: 0, x: '50%', ease: 'back.out(1.5)' }, '-=1');
      tl.from(
        ['#symbolNav .square'],
        {
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            each: 0.1,
            from: 'center',
            grid: 'auto',
            ease: 'power2.in',
          },
          ease: 'power1.inOut',
        },
        'button-=1'
      );
      tl.from(
        ['#hamburger', '#hamburger-close'],
        {
          scale: 0.1,
          transformOrigin: '50% 50%',
          autoAlpha: 0,
          ease: 'power1.out',
        },
        'button'
      );
    },
  },
};
</script>

<style lang="postcss" scoped>
.cities,
#logo,
#hash,
#tickets,
.square,
#subtitle,
#subdate {
  visibility: hidden;
}

.ticketsWrap {
  perspective: 500;
}
</style>
