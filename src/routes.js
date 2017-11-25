import Search from './components/Search.vue';
import About from './components/About.vue';
import TrackDetail from './components/TrackDetail.vue';

const routes = [
  {
    path: '/VueMusic2',
    component: Search,
    name: 'search',
  },
  {
    path: '/VueMusic2/about',
    component: About,
    name: 'about',
  },
  {
    path: '/VueMusic2/track/:id',
    component: TrackDetail,
    name: 'track',
  },
];

export default routes;
