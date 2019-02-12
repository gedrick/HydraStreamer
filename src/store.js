import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  user: null,
  followed: [],
  followedLive: [],
  searchResults: [],
  popularGameStreams: {},
  games: {},
  stats: {},
  hiddenStreams: []
};

const getters = {
  hiddenStreams: state => {
    return state.hiddenStreams;
  },
  stats: state => {
    return state.stats;
  },
  popularGameStreams: state => {
    return state.popularGameStreams;
  },
  popularGames: state => {
    return state.games.popular;
  },
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
    const hiddenStreams = state.hiddenStreams;
    if (state.user && state.user.favorites) {
      return state.user.favorites.filter(stream => !hiddenStreams.includes(stream.name));
    }
    return false;
  },
  searchResults: state => {
    return state.searchResults;
  }
};

const mutations = {
  setStreamHidden(state, { name }) {
    const hiddenStreams = state.hiddenStreams;
    hiddenStreams.push(name);
    Vue.set(state, 'hiddenStreams', hiddenStreams);
  },
  setStats(state, { stats }) {
    Vue.set(state, 'stats', stats);
  },
  setPopularGameStreams(state, { game, streams }) {
    Vue.set(state.popularGameStreams, game, streams);
  },
  setUserHost(state, { channelId, hostedChannelData }) {
    const newFavorites = state.user.favorites.map(favorite => {
      if (favorite.channelId === channelId) {
        favorite.hosted = hostedChannelData;
      }
      return favorite;
    });
    Vue.set(state.user, 'favorites', newFavorites);
  },
  setPopularGames(state, { games }) {
    Vue.set(state.games, 'popular', games);
  },
  setFollowedLive(state, { streams }) {
    const sortedStreams = streams.sort((a, b) => {
      return a.channel.name >= b.channel.name ? 1 : -1;
    });
    Vue.set(state, 'followedLive', sortedStreams);
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
  setLoggedIn(state, { isLoggedIn }) {
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
  getStats({ commit }) {
    return axios.get('/data/stats')
      .then(result => {
        if (result && result.data) {
          commit('setStats', {
            stats: result.data
          });
        }
      });
  },
  follow({ commit }, { channelId }) {
    return axios
      .post(`/api/follow`, {
        channelId
      });
  },
  unfollow({ commit }, { channelId }) {
    return axios
      .post(`/api/unfollow`, {
        channelId
      });
  },
  getPopularGameStreams({ commit }, { game }) {
    return axios
      .get(`/data/getStreamsByGame?game=${game}`)
      .then(result => {
        const streams = result.data;
        commit('setPopularGameStreams', {
          game,
          streams
        });
      });
  },
  getPopularGames({ commit }) {
    return axios
      .get('/data/getPopularGames')
      .then(result => {
        commit('setPopularGames', {
          games: result.data.top
        });
      });
  },
  getFollowedStatus({ commit }, { channel }) {
    commit('setFollowedLive', { streams: [] });
    return axios
      .get(`/data/getChannelLiveStatus?channel=${channel}`)
      .then(result => {
        commit('setFollowedLive', {
          streams: result.data.streams
        });
      });
  },
  toggleFavorite({ commit }, { channelData, toggle }) {
    const action = toggle ? 'favorite' : 'unfavorite';
    return axios
      .post(`/api/${action}`, {
        channelData: channelData,
      })
      .then(() => {
        commit(action, channelData);
      });
  },
  favorite({ commit }, { channelData }) {
    return axios
      .post('/api/favorite', {
        channelData: channelData
      })
      .then(() => {
        commit('favorite', channelData)
      });
  },
  unfavorite({ commit }, { channelData }) {
    return axios
      .post('/api/unfavorite', {
        channelData: channelData
      })
      .then(() => {
        commit('unfavorite',  channelData);
      });
  },
  getMe({ commit }) {
    return axios.get(`/api/me`)
      .then(result => {
        if (!result || (result.data.code && result.data.code === 401)) {
          commit('setUser', null);
          commit('setLoggedIn', {
            isLoggedIn: false
          });
        } else {
          commit('setUser', result.data.user);
          commit('setLoggedIn', {
            isLoggedIn: true
          });
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
      .get(`/data/searchStreams?query=${query}`)
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
