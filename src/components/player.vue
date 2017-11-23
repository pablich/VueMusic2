<template lang="pug">
  .content.has-text-centered(v-if="track && track.album")
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms | ms-to-mm}}]
    p
      audio(controls, :src="track.preview_url")
</template>
<script>
export default {
  data() {
    return {
      track: {},
    };
  },
  created() {
    this.$bus.$on('set-track', (track) => {
      this.track = track;
    });
  },
};
</script>
<style scoped>
img {
  width: 90px;
  border-radius: 50px
}
</style>
