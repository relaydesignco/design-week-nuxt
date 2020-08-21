<template>
  <header class="px-4 py-4 md:p-12 relative bg-offwhite">
    <div class="absolute top-0 right-0 w-2/12 md:w-36 lg:w-64">
      <svg-symbol />
    </div>
    <img src="/MidwestDesignWeek.svg" alt="Midwest Design Week" class="w-6/12 lg:w-8/12" />
    <div class="flex justify-between items-center flex-wrap mt-4 md:mt-8 mb-8 md:mb-20">
      <h1
        class="text-xl md:text-3xl lg:text-4xl uppercase leading-tight tracking-widest mb-4 md:mb-0"
      >
        A Virtual Design Conference_
      </h1>
      <time class="text-3xl lg:text-5xl font-mono font-bold tracking-wide block">
        09/21-25/2020
      </time>
    </div>
    <div class="flex justify-around items-center md:w-3/4 lg:w-7/12 flex-wrap mx-auto md:mb-12">
      <ul class="uppercase text-lg md:text-xl tracking-wider font-bold text-right font-mono">
        <li>Cincinnati</li>
        <li>Indianapolis</li>
        <li>Louisville</li>
        <li>Toledo</li>
      </ul>
      <div class="w-32 md:w-48">
        <svg-logo />
      </div>
      <img src="/MWDW2020.svg" alt="#MWDW2020" class="mt-10 xl:mt-0 w-48 md:w-64" />
    </div>
  </header>
</template>

<script>
// import SvgTitle from '@/components/SvgTitle';
// import SvgHashtag from '@/components/SvgHashtag';
import SvgSymbol from '@/components/SvgSymbol';
import SvgLogo from '@/components/SvgLogo';

export default {
  name: 'AppHero',
  components: {
    // SvgTitle,
    // SvgHashtag,
    SvgSymbol,
    SvgLogo,
  },
  data() {
    return {
      tagline: 'Midwest Design Week',
    };
  },
};
</script>

<style lang="postcss" scoped></style>
