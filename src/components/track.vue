<template lang="pug">
  .card(v-if="track && track.album")
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
        small Popularidad: {{ track.popularity}}
      .content.has-text-centered
        button.button.is-primary.is-outlined(:disabled="!this.track.preview_url", @click="selectTrack")
              | Escuchar Preview
        button.button.is-primary.is-outlined.details(@click="goToTrack(track.id)")
              | Ver Detalles
</template>

<script>
import trackMixin from './../mixins/track';

export default {
  mixins: [trackMixin],
  props: {
    track: { type: Object, required: true },
  },
  methods: {
    goToTrack(id) {
      this.$router.push({ name: 'track', params: { id } });
    },
  },
};
</script>

<style scoped>
.column.is-4.is-offset-4 button.button.details {
  display: none;
}
.column.is-one-quarter button.button {
  margin-bottom: 5px;
}
</style>