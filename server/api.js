const twitchApi = require('twitch-api-v5');
const settings = require('../server/settings.js');

twitchApi.clientID = settings.twitch.clientId;
twitchApi.secret = settings.twitch.secret;

function searchChannels(req, res) {
  twitchApi.search.channels(
    {query: req.query.query},
    (err, response) => {
      if (!err) {
        res.send(response);
      } else {
        console.log('(searchChannels) error reached: ', err, response);
        res.send(JSON.stringify([]));
      }
    }
  );
}

function searchGames(req, res) {
  twitchApi.search.games(
    {query: req.query.query},
    (err, response) => {
      if (!err) {
        res.send(response);
      } else {
        console.log('(searchGames) error reached: ', err, response);
        res.send(JSON.stringify([]));
      }
    }
  );
}

function getChannelsByUser(req, res) {
  twitchApi.users.follows(
    {userID: req.query.userId},
    (err, response) => {
      if (!err) {
        res.send(response);
      } else {
        console.log('(getChannelsByUser) error reached: ', err, response);
        res.send(JSON.stringify([]));
      }
    }
  );
}

function getUserIdByUserName(req, res) {
  twitchApi.users.usersByName(
    { users: req.query.userName },
    (err, response) => {
      if (!err && response.users.length > 0) {
        res.send(response['users'][0]._id);
      } else {
        console.log('(getUserIdByUserName) error reached: ', err, response);
        res.send(false);
      }
    }
  );
}

module.exports = {
  searchChannels,
  searchGames,
  
  getChannelsByUser,
  getUserIdByUserName
};