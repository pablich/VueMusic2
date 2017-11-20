import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    switchState: true,
    checkboxState: true,
  },
});
Vue.use(Buefy);
