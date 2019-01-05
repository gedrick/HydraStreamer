import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Watch from './views/Watch.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    }
  ]
});
