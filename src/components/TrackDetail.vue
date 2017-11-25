<template lang="pug">
  .container
    .columns(v-if="track && track.album")
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v}}
              nav.level
                .level-left
                  a.level-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle']),
  },
  created() {
    if (!this.track || !this.track.id || this.track.id !== this.$route.params.id) {
      this.getTrackById({ id: this.$route.params.id })
        .then(() => { console.log('Track Cargado'); });
    }
  },
  methods: {
    ...mapActions(['getTrackById']),
  },
};
</script>

<style scoped>
    .column {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>