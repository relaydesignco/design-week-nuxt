<template>
  <button @click="$emit('clicked')">
    <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block w-8 stroke-current">
      <line x1="2.5" y1="2.5" x2="47.5" y2="2.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="2.5" y1="17.5" x2="47.5" y2="17.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="2.5" y1="32.5" x2="47.5" y2="32.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ButtonHamburger',
};
</script>

<style lang="scss" scoped></style>
