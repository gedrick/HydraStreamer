const twitchApi = require('twitch-api-v5');
const settings = require('./settings');
const axios = require('axios');

twitchApi.clientID = settings.twitch.clientId;
twitchApi.secret = settings.twitch.secret;

function getUserChannels(req, res) {
  twitchApi.users.follows({
    userID: req.query.userID || req.user._id
  }, (err, response) => {
    if (!err) {
      res.status(200).send(response);
    } else {
      console.log('(getUserChannels) error reached: ', err, response);
      res.status(200).send(JSON.stringify([]));
    }
  });
}

function searchStreams(req, res) {
  twitchApi.search.streams({
    query: req.query.query,
    limit: req.query.limit || 25,
    hls: true
  }, (err, response) => {
    if (!err) {
      res.status(200).send(response);
    } else {
      console.log('(searchStreams) error reached: ', err, response);
      res.status(200).send(JSON.stringify([]));
    }
  });
}

function searchGames(req, res) {
  twitchApi.search.games({
    query: req.query.query,
    limit: req.query.limit || 25
  }, (err, response) => {
    if (!err) {
      res.status(200).send(response);
    } else {
      console.log('(searchGames) error reached: ', err, response);
      res.status(500).json(err);
    }
  });
}

function getChannelsByUser(req, res) {
  twitchApi.users.follows({
    userID: req.query.userID
  }, (err, response) => {
    if (!err) {
      res.status(200).send(response);
    } else {
      console.log('(getChannelsByUser) error reached: ', err, response);
      res.status(500).json(err);
    }
  });
}

function getUserIdByUserName(req, res) {
  twitchApi.users.usersByName({
    users: req.query.userName
  }, (err, response) => {
    if (!err && response.users.length > 0) {
      res.status(200).send(response['users'][0]._id);
    } else {
      console.log('(getUserIdByUserName) error reached: ', err, response);
      res.status(500).json(err);
    }
  });
}

function getChannelLiveStatus(req, res) {
  const channel = req.query.channel;
  twitchApi.streams.live({
    channel: channel
  }, (err, response) => {
    if (!err) {
      res.status(200).send(response);
    } else {
      console.log('(getChannelLiveStatus) error reached: ', err, response);
      res.status(500).json(err);
    }
  });
}

function getPopularGames(req, res) {
  twitchApi.games.top({}, (err, response) => {
    if (!err) {
      res.status(200).send(response);
    } else {
      console.log('(getPopularGames) error reached: ', err, response);
      res.status(500).json(err);
    }
  });
}

function userIsHosting(req, res) {
  const channelId = req.query.channelId;
  axios.get(`https://tmi.twitch.tv/hosts?include_logins=1&host=${channelId}`)
    .then(result => {
      const host = result.data.hosts[0];
      if (host.target_id) {
        res.status(200).send({
          isHosting: true,
          channelId: host.target_id,
          name: host.target_login
        });
      } else {
        res.status(200).json({
          isHosting: false
        });
      }
    });
}

module.exports = {
  searchStreams,
  searchGames,
  userIsHosting,

  getChannelsByUser,
  getUserIdByUserName,
  getUserChannels,
  getChannelLiveStatus,
  getPopularGames,
};