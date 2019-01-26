import store from './store';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Watch from './views/Watch.vue';
import Admin from './views/Admin.vue';

const requireAuthentication = (to, from, next) => {
  store.dispatch('getMe').then(() => {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next({ path: '/' });
  });
}

const requireAdministrator = (to, from, next) => {
  console.log(this);

  store.dispatch('getMe').then(() => {
    if (store.getters.user.roles && store.getters.user.roles.includes('administrator')) {
      next();
      return;
    }
    next({ path: '/' });
  });
}

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
      component: Watch,
      beforeEnter: requireAuthentication
    },
    {
      path: '/admin',
      name: '/admin',
      component: Admin,
      beforeEnter: requireAdministrator
    }
  ]
});
