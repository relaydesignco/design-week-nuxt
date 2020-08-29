<template>
  <div class="">
    <form :action="mcAction" method="POST" class="">
      <input type="hidden" name="u" :value="mcU" />
      <input type="hidden" name="id" :value="mcId" />
      <div class="mb-4">
        <label class="field-label" for="MERGE0">
          Email Address <span class="req asterisk">*</span>
        </label>
        <input
          id="MERGE0"
          type="email"
          autocapitalize="off"
          autocorrect="off"
          name="MERGE0"
          size="25"
          value=""
          required
          class="field"
        />
      </div>

      <div class="mb-4">
        <label for="MERGE1" class="field-label">
          First Name <span class="req asterisk">*</span></label
        >
        <input id="MERGE1" type="text" name="MERGE1" size="25" value="" required class="field" />
      </div>

      <div class="mb-4">
        <label for="MERGE2" class="field-label">
          Last Name <span class="req asterisk">*</span>
        </label>
        <input id="MERGE2" type="text" name="MERGE2" size="25" value="" required class="field" />
      </div>

      <input
        type="submit"
        class="formEmailButton btn bg-blue hover:bg-blue-dark focus:outline-none focus:shadow-outline md:w-1/3"
        name="submit"
        value="Subscribe"
      />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    mcAction: {
      type: String,
      default: 'https://aiga.us3.list-manage.com/subscribe/post',
    },
    mcU: {
      type: String,
      default: '751e598f443a47697e8b78cb9',
    },
    mcId: {
      type: String,
      default: 'f248d566af',
    },
  },
  // data() {
  //   return {
  //     formAction: 'https://aiga.us3.list-manage.com/subscribe/post',
  //     mcU: '751e598f443a47697e8b78cb9',
  //     mcId: 'f248d566af',
  //   };
  // },
};
</script>

<style lang="postcss" scoped></style>
