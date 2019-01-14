import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  user: null,
  follows: null,
  searchResults: []
};

const mutations = {
  setUser(state, user) {
    Vue.set(state, 'user', user);
  },
  setFollows(state, follows) {
    Vue.set(state, 'follows', follows);
  },
  setSearchResults(state, { streams }) {
    Vue.set(state, 'searchResults', [...streams]);
  }
};

const actions = {
  search({ commit }, { query }) {
    return axios
      .get(`/api/searchStreams?query=${query}&limit=10`)
      .then(results => {
        const streams = results.data.streams;
        console.log('response received:', streams);
        commit('setSearchResults', {
          streams
        });
      });
  },
  getUserIdByUserName({ commit }, { userName }) {
    return axios
      .get(`/api/getUserIdByUserName?userName=${userName}`, {
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
