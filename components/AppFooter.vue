<template>
  <footer class="bg-black">
    <div class="p-4 max-w-screen-xl mx-auto text-sm text-white">
      <p>© {{ year }} AIGA Midwest Design Week</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="postcss" scoped></style>
