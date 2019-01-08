import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Callback from './views/Callback.vue';
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
      path: '/auth/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    }
  ]
});
