<template>
  <header class="bg-offwhite relative site-header">
    <!-- regular page header -->
    <template v-if="!isHomePage">
      <div class="flex justify-between items-center">
        <div class="grid grid-cols-3 gap-1 lg:gap-4 items-center ml-4 lg:ml-12">
          <ul class="uppercase text-xxs lg:text-base tracking-wider font-bold text-right font-mono leading-tight">
            <li>Cincinnati</li>
            <li>Indianapolis</li>
            <li>Louisville</li>
            <li>Toledo</li>
          </ul>
          <div class="w-16 lg:w-32 mx-auto">
            <nuxt-link to="/" tabindex="-1">
              <svg-logo />
            </nuxt-link>
          </div>
          <div class="w-20 lg:w-40">
            <svg-mwdw />
          </div>
        </div>
        <div class="w-20 lg:w-48 z-50">
          <svg-symbol-nav @toggle-nav="SET_NAV_IS_OPEN(!navIsOpen)" @close-nav="SET_NAV_IS_OPEN(false)" />
        </div>
        <transition
          name="slide-down"
          enter-active-class="animated slideInDown faster"
          leave-active-class="animated slideOutUp faster"
        >
          <app-nav v-if="navIsOpen" @close-nav="SET_NAV_IS_OPEN(false)" />
        </transition>
      </div>
    </template>

    <!-- landing page header -->
    <template v-else>
      <!-- intro animation -->
      <div v-if="isIntro" :class="['absolute inset-x-0 top-1/2 transform -translate-y-1/2']">
        <svg-animated-logo @intro-over="onIntroOver" />
      </div>

      <div
        :class="[
          'px-6 pb-6 pt-10 lg:px-16 lg:pb-8 xxl:pb-16 lg:pt-24 xl:min-h-screen flex flex-col justify-between',
          { invisible: isIntro },
        ]"
      >
        <div id="symbolNavWrap" ref="symbolNavWrap" class="absolute top-0 right-0 w-20 lg:w-48 z-50">
          <svg-symbol-nav @toggle-nav="SET_NAV_IS_OPEN(!navIsOpen)" @close-nav="SET_NAV_IS_OPEN(false)" />
        </div>
        <transition
          name="slide-down"
          enter-active-class="animated slideInDown faster"
          leave-active-class="animated slideOutUp faster"
        >
          <app-nav v-if="navIsOpen" @close-nav="SET_NAV_IS_OPEN(false)" />
        </transition>
        <div>
          <div class="w-9/12 lg:w-8/12">
            <svg-title />
          </div>
          <div class="flex justify-between items-center flex-wrap mt-3 md:mt-8 mb-6 xl:mb-0">
            <h1
              id="subtitle"
              ref="subtitle"
              class="
                font-mono font-normal
                text-xs
                md:text-3xl
                xxl:text-4xl
                uppercase
                leading-tight
                tracking-widest
                mb-3
                md:mb-0
              "
            >
              A Virtual Design Conference_
            </h1>
            <time
              id="subdate"
              ref="subdate"
              class="text-2xl md:text-3xl xxl:text-4xl font-mono font-bold tracking-wide block"
            >
              09/21-25/2020
            </time>
          </div>
        </div>

        <div class="flex w-full lg:max-w-screen-md items-center mx-auto md:mb-12 lg:mb-0">
          <ul class="uppercase text-xxs md:text-sm lg:text-base tracking-wider font-bold text-right font-mono">
            <li id="cin" ref="cin" class="city-header">Cincinnati</li>
            <li id="ind" ref="ind" class="city-header">Indianapolis</li>
            <li id="lou" ref="lou" class="city-header">Louisville</li>
            <li id="tol" ref="tol" class="city-header">Toledo</li>
          </ul>

          <div id="logoHeader" ref="logoHeader" class="w-16 md:w-32 mx-auto">
            <svg-logo />
          </div>

          <div id="hash" ref="hash" class="w-32 md:w-80">
            <svg-hashtag ref="hash" />
          </div>
        </div>

        <div ref="ticketsWrap" class="w-full text-center mt-4 lg:mt-6">
          <a
            id="tickets"
            ref="tickets"
            :href="options.register_link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-sm lg:btn btn-orange lg:text-3xl lg:px-6"
          >
            Tickets
          </a>
        </div>
        <p id="student-aid" ref="studentAid" class="text-xs lg:text-sm text-center mt-4 xl:mt-2">
          Need
          <a
            href="//docs.google.com/forms/d/e/1FAIpQLScuJBlZFvo4mNhyAe_pXjYo4-NAgru5EFNQfIKJv6OqMHbMXw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            >financial aid</a
          >
          assistance? Are you a
          <a
            href="//www.eventbrite.com/e/midwest-design-week-student-full-access-weekly-pass-tickets-120093489861"
            target="_blank"
            rel="noopener noreferrer"
            >student</a
          >?
        </p>
      </div>
    </template>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { gsap } from 'gsap';

export default {
  name: 'AppHeader',
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

  // mounted() {
  //   this.animateHeader();
  // },

  methods: {
    ...mapMutations(['SET_NAV_IS_OPEN']),

    onIntroOver() {
      this.isIntro = false;
      this.animateHeader();
    },

    animateHeader() {
      const tl = gsap.timeline({
        defaults: { duration: 0.8 },
      });

      tl.addLabel('start');
      tl.from(this.$refs.logoHeader, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
      tl.addLabel('logo');
      tl.from('.city-header', { autoAlpha: 0, y: '150%', stagger: 0.1 }, '-=0.4');
      tl.addLabel('list');
      tl.from(this.$refs.hash, { autoAlpha: 0, x: '50%', ease: 'back.out(1.5)' }, '-=0.4');
      tl.addLabel('hash');
      tl.from(this.$refs.tickets, { autoAlpha: 0, rotateX: 90, duration: 1, ease: 'back.out(4)' }, '-=0.2');
      tl.from(this.$refs.studentAid, { autoAlpha: 0, x: '-15%', ease: 'back.out(1.5)' }, '-=0.4');
      tl.addLabel('button');
      tl.from(
        '#midwest .square',
        {
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            amount: 1.2,
            from: 'random',
            grid: 'auto',
            ease: 'power2.in',
          },
          ease: 'power1.inOut',
        },
        'logo'
      );
      tl.from(
        '#design .square',
        {
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            amount: 1.2,
            from: 'random',
            grid: 'auto',
            ease: 'power2.in',
          },
          ease: 'power1.inOut',
        },
        'logo+=0.5'
      );
      tl.from(
        '#week .square',
        {
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            amount: 1.2,
            from: 'random',
            grid: 'auto',
            ease: 'power2.in',
          },
          ease: 'power1.inOut',
        },
        'logo+=1'
      );
      tl.from(this.$refs.subtitle, { autoAlpha: 0, y: '100%' }, '-=1.4');
      tl.from(this.$refs.subdate, { autoAlpha: 0, x: '25%', ease: 'back.out(1.5)' }, '-=1');

      tl.from(
        ['.symbolNavSquare'],
        {
          duration: 0.4,
          scale: 0.1,
          autoAlpha: 0,
          y: 50,
          stagger: {
            each: 0.1,
            from: 'random',
            grid: [2, 2],
          },
        },
        'button'
      );
      tl.from(
        ['#hamburger'],
        {
          duration: 0.4,
          scale: 0.1,
          autoAlpha: 0,
          transformOrigin: '50% 50%',
          ease: 'power1.out',
        },
        'button+=0.4'
      );
    },
  },
};
</script>

<style lang="postcss" scoped>
.ticketsWrap {
  perspective: 500;
}
</style>
