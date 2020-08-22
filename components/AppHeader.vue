<template>
  <header class="bg-offwhite">
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
          <svg-logo />
        </div>
        <div class="w-20 lg:w-40">
          <svg-mwdw />
        </div>
      </div>
      <div class="w-20 lg:w-48">
        <svg-symbol />
      </div>
    </div>
  </header>
</template>

<script>
import SvgSymbol from '@/components/SvgSymbol';
import SvgLogo from '@/components/SvgLogo';
import SvgMwdw from '@/components/SvgMwdw';

export default {
  name: 'AppHeader',
  components: {
    SvgLogo,
    SvgSymbol,
    SvgMwdw,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="postcss" scoped></style>
