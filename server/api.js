const User = require('./models/user');
const twitchApi = require('twitch-api-v5');
const settings = require('./settings');
const moment = require('moment');

twitchApi.clientID = settings.twitch.clientId;
twitchApi.secret = settings.twitch.secret;

function me(req, res) {
  if (req.isAuthenticated())  {
    User.findByIdAndUpdate(req.user._id, {$set: {last_online: moment()}}, (err, user) => {
      res.json({
        user: req.user
      });
    });
  }
}

function favorite(req, res) {
  const userID = req.user._id;
  const channelData = req.body.channelData;

  User.findById(userID, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      let newFavorites = [...doc.favorites];
      newFavorites.push({...channelData});
      doc.favorites = newFavorites;

      doc.save(() => {
        res.status(200).json({ result: 'OK' });
      });
    }
  });
}

function unfavorite(req, res) {
  const userID = req.user._id;
  const channelData = req.body.channelData;

  User.findById(userID, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      let newFavorites = [...doc.favorites];
      newFavorites = newFavorites.filter(favorite => favorite.channelId !== channelData.channelId);
      doc.favorites = newFavorites;

      doc.save(() => {
        res.status(200).json({ result: 'OK' });
      });
    }
  });
}

function follow(req, res) {
  const userID = req.user.id;
  const channelId = req.body.channelId;

  twitchApi.users.followChannel({
    userID: userID,
    channelID: channelId
  }, (err, response) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({ result: 'OK' });
    }
  });
}

function unfollow(req, res) {
  const userID = req.user.id;
  const channelId = req.body.channelId;

  twitchApi.users.followChannel({
    userID: userID,
    channelID: channelId
  }, (err, response) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({ result: 'OK' });
    }
  });
}

module.exports = {
  me,

  favorite,
  unfavorite,

  follow,
  unfollow
};