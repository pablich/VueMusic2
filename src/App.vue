<template lang="pug">
#app
  vm-header
  section.section
    nav.nav
      .container
        .field.has-addons
            input.input.is-large(
              type="text",
              placeholder="Buscar canciones",
              v-model="searchQuery"
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
  vm-footer
</template>

<script>
import trackService from './services/track';

import VmFooter from './components/layout/footer.vue';
import VmHeader from './components/layout/header.vue';

import VmTrack from './components/track.vue';

import VmLoader from './components/shared/loader.vue';
import VmNotification from './components/shared/notification.vue';

export default {
  name: 'app',
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
    VmFooter,
    VmHeader,
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
@import './scss/main.scss';
.results{
  margin-top: 10px
}
</style>
