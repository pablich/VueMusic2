<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }} 
          p.subtitle.is-6 {{ track.artists[0].name }}
      .content.has-text-centered
        small Reproducciones: {{ track.duration_ms}}
        a.button.is-primary.is-outlined(@click="selectTrack")
              | Escuchar Preview
</template>

<script>
  export default {
    props: {
      track: { type: Object, required: true },
    },
    methods: {
      selectTrack() {
        this.$emit('select', this.track.id);
        this.$bus.$emit('set-track', this.track);
      },
    },
  };
</script>

<style scoped>

</style>