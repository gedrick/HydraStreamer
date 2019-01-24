import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  user: null,
  followed: [],
  followedLive: [],
  searchResults: []
};

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn;
  },
  user: state => {
    return state.user || false;
  },
  userID: state => {
    if (state.user && state.user._id) {
      return state.user._id;
    }
    return false;
  },
  twitchID: state => {
    if (state.user && state.user.id) {
      return state.user.id;
    }
    return false;
  },
  followed: state => {
    return state.followed;
  },
  followedLive: state => {
    return state.followedLive;
  },
  favorites: state => {
    if (state.user && state.user.favorites) {
      return state.user.favorites;
    }
    return false;
  },
  searchResults: state => {
    return state.searchResults;
  }
};

const mutations = {
  setFollowedLive(state, streams) {
    Vue.set(state, 'followedLive', streams);
  },
  favorite(state, channelData) {
    const newFavorites = state.user.favorites;
    newFavorites.push(channelData);
    Vue.set(state.user, 'favorites', newFavorites);
  },
  unfavorite(state, channelData) {
    const newFavorites = state.user.favorites.filter(favorite => favorite.channelId !== channelData.channelId);
    Vue.set(state.user, 'favorites', newFavorites);
  },
  setLoggedIn(state, isLoggedIn) {
    Vue.set(state, 'isLoggedIn', isLoggedIn);
  },
  setUser(state, user) {
    Vue.set(state, 'user', user);
  },
  setFollowed(state, streams) {
    Vue.set(state, 'followed', streams);
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
  getFollowedStatus({ commit }, { channel }) {
    return axios
      .get(`/data/getChannelLiveStatus?channel=${channel}`)
      .then(result => {
        commit('setFollowedLive', result.data.streams);
      });
  },
  toggleFavorite({ commit }, { userID, channelData, toggle }) {
    const action = toggle ? 'favorite' : 'unfavorite';
    return axios
      .post(`/api/${action}`, {
        userID: userID,
        channelData: channelData,
      })
      .then(() => {
        commit(action, channelData);
      });
  },
  favorite({ commit }, { userID, channelData }) {
    return axios
      .post('/api/favorite', {
        userID: userID,
        channelData: channelData
      })
      .then(() => {
        commit('favorite', channelData)
      });
  },
  unfavorite({ commit }, { userID, channelData }) {
    return axios
      .post('/api/unfavorite', {
        userID: userID,
        channelData: channelData
      })
      .then(() => {
        commit('unfavorite', channelData);
      });
  },
  getMe({ commit }) {
    return axios.get(`/api/me`)
      .then(result => {
        if (!result || (result.data.code && result.data.code === 401)) {
          commit('setUser', null);
          commit('setLoggedIn', false)
        } else {
          commit('setUser', result.data.user);
          commit('setLoggedIn', true);
        }
      });
  },
  getUserChannels({ commit }, { userID }) {
    return axios
      .get(`/data/getUserChannels?userID=${userID}`, {
        userID: userID
      })
      .then(results => {
        const streams = results.data.follows;
        commit('setFollowed', streams);
      });
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
