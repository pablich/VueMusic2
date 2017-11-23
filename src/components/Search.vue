<template lang="pug">
main
  section.section
    nav.nav
      .container
        .field.has-addons
            input.input.is-large(
              type="text",
              placeholder="Buscar canciones",
              v-model="searchQuery",
              @keyup.enter="search"
            )
            a.button.is-primary.is-large(@click="search") Buscar
            a.button.is-danger.is-large &times;
    .container
      p.help.is-info.has-text-right
              small {{ searchMessage }}
    .container.results(v-show="!loader")
      VmNotification(v-show="showNotification")
        p(slot="body") No se encontraron resultados
      .columns.is-multiline
        .column.is-one-quarter(v-for="track in tracks") 
          vm-track(
            :class="{ 'is-active': track.id === selectedTrack }"
            :track="track", 
            @select="setSelectedTrack")
  vm-loader(v-show="loader")
</template>

<script>
import trackService from './../services/track';

import VmTrack from './../components/Track.vue';

import VmLoader from './../components/shared/Loader.vue';
import VmNotification from './../components/shared/Notification.vue';

export default {
  name: 'search',
  data() {
    return {
      searchQuery: '',
      tracks: [],
      loader: false,
      selectedTrack: '',
      showNotification: false,
    };
  },
  components: {
    VmTrack,
    VmLoader,
    VmNotification,
  },
  computed: {
    searchMessage() {
      return `Resultados encontrados ${this.tracks.length}`;
    },
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },
  methods: {
    search() {
      if (this.searchQuery) {
        this.loader = true;
        trackService.search(this.searchQuery)
          .then((res) => {
            this.showNotification = res.tracks.total === 0;
            this.tracks = res.tracks.items;
            this.loader = false;
          });
      }
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
  },
};
</script>

<style lang="scss">
.results{
  margin-top: 10px
}
</style>
