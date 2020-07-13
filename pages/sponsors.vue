<template>
  <div class="sponsors">
    <main>
      <div v-for="sponsor in sponsors" :key="sponsor.id" class="sponsor">
        <h3>
          <a :href="`${sponsor.acf.url}`">{{ sponsor.title.rendered }}</a>
        </h3>
        <!-- <small>{{ sponsor.date | dateformat }}</small> -->
        <a :href="`${sponsor.acf.url}`">
          <img :src="sponsor.acf.image.sizes.large" alt="sponsor.acf.image.alt" />
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      // key: value,
    };
  },

  computed: {
    ...mapState(['sponsors']),
  },

  created() {
    this.getSponsors();
  },

  methods: {
    ...mapActions(['getSponsors']),
  },
};
</script>

<style lang="scss" scoped></style>
