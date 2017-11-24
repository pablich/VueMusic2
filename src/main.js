import Buefy from 'buefy';
import VueRouter from 'vue-router';
import 'buefy/lib/buefy.css';
import Vue from 'vue';
import msToMm from './filters/ms-to-mm';
import disabled from './directives/disabled';
import App from './App.vue';
import routes from './routes';
import EventBus from './plugins/event-bus';

Vue.use(Buefy);
Vue.use(EventBus);
Vue.use(VueRouter);
Vue.use(msToMm);
Vue.use(disabled);

const router = new VueRouter({
  routes,
  mode: 'history',
});
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});

