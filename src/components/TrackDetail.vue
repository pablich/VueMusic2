<template lang="pug">
  .container
    .columns(v-if="track && track.album")
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p
            button.button.is-primary.is-large(@click="selectTrack")
              | Escuchar preview
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
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
    vm-loader(v-show="loader")
</template>

<script>
import VmLoader from './../components/shared/Loader.vue';
import trackMixin from './../mixins/track';
import trackService from './../services/track';

export default {
  mixins: [trackMixin],
  data() {
    return {
      track: {},
      loader: true,
    };
  },
  components: { VmLoader },
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