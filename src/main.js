import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCookie from 'vue-cookie';
import axios from 'axios';
import EvaIcons from 'vue-eva-icons';

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401 && window.location.hash !== '#/') {
    window.location.href = '/';
    return;
  }
});

Vue.config.productionTip = false;

Vue.use(VueCookie);
Vue.use(EvaIcons);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
