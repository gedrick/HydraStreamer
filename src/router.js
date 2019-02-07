import store from './store';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Watch from './views/Watch.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';

const requireAuthentication = (to, from, next) => {
  store.dispatch('getMe').then(() => {
    if (store.getters.isLoggedIn) {
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
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    }
  ]
});
