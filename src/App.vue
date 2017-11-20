<template lang="pug">
#app
  section.section
    .container
      img(src='./assets/logo.png', alt='Hello World')
      h1.title
        | Hello World
      p.subtitle
        | My first website with 
        strong Vue, Sass & Pug
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss">
@import './scss/main.scss';
#app {
    margin: 2em auto;
    width: 400px;
}
</style>
