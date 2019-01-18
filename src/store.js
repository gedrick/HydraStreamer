import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  user: null,
  follows: null,
  favorites: [],
  searchResults: []
};

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  user: state => {
    return state.user
  },
  favorites: state => {
    return state.favorites;
  },
  searchResults: state => {
    return state.searchResults;
  }
};

const mutations = {
  setLoggedIn(state, isLoggedIn) {
    Vue.set(state, 'isLoggedIn', isLoggedIn);
  },
  setUser(state, user) {
    Vue.set(state, 'user', user);
  },
  setFollows(state, follows) {
    Vue.set(state, 'follows', follows);
  },
  setSearchResults(state, { streams }) {
    if (streams && streams.length) {
      Vue.set(state, 'searchResults', [...streams]);
    } else {
      Vue.set(state, 'searchResults', []);
    }
  },
  toggleStream(state, { name }) {
    const streams = [...state.favorites];
    if (!streams.includes(name)) {
      streams.push(name);
    } else {
      streams.splice(streams.indexOf(name), 1);
    }
    Vue.set(state, 'favorites', streams);
  }
};

const actions = {
  getMe({ commit }) {
    return axios.get(`/api/me`).then(result => {
      const data = result.data;
      if (data.code && data.code === 401) {
        commit('setUser', null);
        commit('setLoggedIn', false)
      } else {
        commit('setUser', result.data.user);
        commit('setLoggedIn', true);
      }
    })
  },
  search({ commit }, { query }) {
    return axios
      .get(`/data/searchStreams?query=${query}&limit=10`)
      .then(results => {
        const streams = results.data.streams;
        commit('setSearchResults', {
          streams
        });
      });
  },
  getUserIdByUserName({ commit }, { userName }) {
    return axios
      .get(`/data/getUserIdByUserName?userName=${userName}`, {
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
  getters,
  mutations,
  actions
});
