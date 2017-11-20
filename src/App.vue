<template lang="pug">
#app
  vm-header
  section.section
    nav.nav.has-shadow
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
      .columns.is-multiline
        .column.is-one-quarter(v-for="track in tracks") 
          vm-track(:track="track")
  vm-loader(v-show="loader")
  vm-footer
</template>

<script>
import trackService from './services/track';
import VmFooter from './components/layout/footer.vue';
import VmHeader from './components/layout/header.vue';
import VmTrack from './components/track.vue';
import VmLoader from './components/shared/loader.vue';

export default {
  name: 'app',
  data() {
    return {
      searchQuery: '',
      tracks: [],
      loader: false,
    };
  },
  components: {
    VmFooter,
    VmHeader,
    VmTrack,
    VmLoader,
  },
  computed: {
    searchMessage() {
      return `Resultados encontrados ${this.tracks.length}`;
    },
  },
  methods: {
    search() {
      if (this.searchQuery) {
        this.loader = true;
        trackService.search(this.searchQuery)
          .then((res) => {
            this.tracks = res.tracks.items;
            this.loader = false;
          });
      }
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
