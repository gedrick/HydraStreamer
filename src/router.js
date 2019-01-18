import store from './store';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Watch from './views/Watch.vue';

const checkAuthenticated = (to, from, next) => {
  store.dispatch('getMe').then(() => {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next({ path: '/' });
  });
}

const checkNotAuthenticated = (to, from, next) => {
  store.dispatch('getMe').then(() => {
    if (!store.getters.isLoggedIn) {
      next();
      return;
    }
    next({ path: '/watch' });
  });
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: checkNotAuthenticated
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch,
      beforeEnter: checkAuthenticated
    }
  ]
});
