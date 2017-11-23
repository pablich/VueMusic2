<template lang="pug">
  section.hero.is-primary.is-bold
    .hero-head
      .container
        header.nav
            .navbar-menu
                .navbar-start
                    .nav-item
                        strong 📻 VueMusic 2
                .navbar-end
                  .navbar-item
                    router-link.nav-item(to="/") Home
                  .navbar-item
                    router-link.nav-item(to="about")  Acerca 
    .hero-body
        .container.has-text-centered
            h1.title VueMusic 2
            h2.subtitle Canciones de Spotify
            vm-player
</template>
<script>
import VmPlayer from '../../components/Player.vue';

export default {
  components: {
    VmPlayer,
  },
};
</script>

