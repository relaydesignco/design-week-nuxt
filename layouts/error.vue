<template>
  <div class="container mx-auto text-center px-8 py-16 leading-loose">
    <h2 class="text-xl mb-2">Sorry, but...</h2>
    <h1 class="text-2xl mb-4">{{ error.message }}</h1>
    <p class="mb-8">Status Code: {{ error.statusCode }}</p>
    <NuxtLink to="/">
      <img src="~/assets/images/mwdw-2021-logo-small.png" alt="MWDW" class="w-48 mx-auto" />
      <span class="text-link">Back Home</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'basic',
  props: ['error'], // you can set a custom layout for the error page
};
</script>
