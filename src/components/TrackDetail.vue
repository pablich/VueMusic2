<template lang="pug">
  .container
    .columns
      .column.is-4.is-offset-4
        vm-track(:track="track")
    vm-loader(v-show="loader")
</template>

<script>
import VmTrack from './../components/Track.vue';
import trackService from './../services/track';
import VmLoader from './../components/shared/Loader.vue';

export default {
  data() {
    return {
      track: {},
      loader: true,
    };
  },
  components: { VmTrack, VmLoader },
  created() {
    trackService.getById(this.$route.params.id)
      .then((res) => {
        this.track = res;
        this.loader = false;
      });
  },
};
</script>

<style scoped>
    .column {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>