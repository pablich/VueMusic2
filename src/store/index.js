import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    track: {},
  },
  mutations: Object.assign({}, mutations),
  actions: Object.assign({}, actions),
  getters: Object.assign({}, getters),
});

export default store;
