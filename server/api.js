const User = require('./models/user');
const twitchApi = require('twitch-api-v5');
const settings = require('./settings');
const moment = require('moment');

twitchApi.clientID = settings.twitch.clientId;
twitchApi.secret = settings.twitch.secret;

function stats(req, res) {
  const stats = {};
  if (!req.isAuthenticated()) {
    return res.status(401).send({
      code: 401,
      message: 'Not logged in'
    });
  }
  User.countDocuments({}, (err, count) => {
    stats.users = count;
    const cutoff = moment().subtract(10, 'minutes');
    User.find({ last_online: {$exists: true, $ne: null, $gt: cutoff} }, (err, docs) => {
      if (err) {
        res.status(500).json({
          error: err,
          message: 'Failed to get stats'
        });
      } else {
        let streamCount = 0;
        docs.map(doc => {
          streamCount += doc.favorites.length;
        });
        stats.online = docs.length;
        stats.activeStreams = streamCount;
        res.status(200).json(stats);
      }
    });
  });
}

function me(req, res) {
  if (req.isAuthenticated())  {
    User.findByIdAndUpdate(req.user._id, {$set: {last_online: moment()}}, (err, user) => {
      res.json({
        user: req.user
      });
    });
  }
}

function reorderFavorites(req, res) {
  const userID = req.user._id;
  const index = req.body.index;
  const direction = req.body.direction;

  User.findById(userID, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      let newFavorites = [...doc.favorites];

      [newFavorites[index], newFavorites[index + direction]] = [newFavorites[index + direction], newFavorites[index]];

      doc.favorites = newFavorites;
      doc.save(() => {
        res.status(200).json(newFavorites);
      });
    }
  });
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
  stats,
  me,

  reorderFavorites,
  favorite,
  unfavorite,

  follow,
  unfollow
};