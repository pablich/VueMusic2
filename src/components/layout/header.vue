<template lang="pug">
  section.hero.is-primary.is-bold
    .hero-head
        header.nav
            .container
                .nav-left
                    .nav-item
                        strong 📻 VueMusic 2
                .nav-right.nav-menu
    .hero-body
        .container.has-text-centered
            h1.title VueMusic 2
            h2.subtitle Canciones de Spotify
            vm-player
</template>
<script>
import VmPlayer from '../../components/player.vue';

export default {
  components: {
    VmPlayer,
  },
};
</script>

