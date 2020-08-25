<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.54 181.54" class="w-full">
    <g style="isolation: isolate">
      <g id="SymbolNav">
        <rect
          id="red"
          x="90.77"
          width="90.77"
          height="90.77"
          class="fill-current text-red"
          style="mix-blend-mode: multiply"
        />
        <rect
          id="green"
          width="90.77"
          height="90.77"
          class="fill-current text-green"
          style="mix-blend-mode: multiply"
        />
        <rect
          id="teal"
          x="90.77"
          y="90.77"
          width="90.77"
          height="90.77"
          class="fill-current text-teal"
          style="mix-blend-mode: multiply"
        />
        <rect
          id="blue"
          x="45.39"
          y="45.39"
          width="90.77"
          height="90.77"
          class="fill-current text-blue hover:text-blue-dark cursor-pointer transition-colors duration-300"
          style="mix-blend-mode: multiply"
          @click="toggleEvent()"
        />
        <g id="hamburger" class="pointer-events-none">
          <line
            x1="73.1"
            y1="90.67"
            x2="108.1"
            y2="90.67"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="4"
            class="stroke-current text-white"
          />
          <line
            x1="73.1"
            y1="81.76"
            x2="108.1"
            y2="81.76"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="4"
            class="stroke-current text-white"
          />
          <line
            x1="73.1"
            y1="99.58"
            x2="108.1"
            y2="99.58"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="4"
            class="stroke-current text-white"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'SvgSymbol',
  methods: {
    toggleEvent() {
      this.$emit('toggle-nav');
    },
  },
};
</script>

<style lang="postcss" scoped></style>
