import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  user: null,
  follows: null
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setFollows(state, follows) {
    state.follows = follows;
  }
};

const actions = {
  getUserIdByUserName({ commit }, { userName }) {
    console.log('store', userName);

    return axios
      .post(`/api/getUserIdByUserName?userName=${userName}`, {
        userName: userName
      })
      .then(response => {
        const id = response.data;
        commit('setUser', {
          name: userName,
          id: id
        });
      });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
