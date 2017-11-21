import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import Vue from 'vue';
import App from './App.vue';
import EventBus from './plugins/event-bus';

Vue.use(EventBus);
Vue.use(Buefy);
new Vue({
  el: '#app',
  render: h => h(App),
});

