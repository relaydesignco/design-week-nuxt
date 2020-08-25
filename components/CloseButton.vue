<template functional>
  <nuxt-link :to="props.toRoute" class="btn bg-black">
    <div class="pb-1 w-4 lg:w-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.75 28.75" class="w-full">
        <g>
          <line
            x1="2"
            y1="26.75"
            x2="26.75"
            y2="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="4"
            class="stroke-current text-white"
          />
          <line
            x1="26.75"
            y1="26.75"
            x2="2"
            y2="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="4"
            class="stroke-current text-white"
          />
        </g>
      </svg>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CloseButton',
  props: {
    toRoute: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
