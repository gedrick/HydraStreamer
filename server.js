const express = require('express');
const app = express();

const twitch = require('./server/api.js').twitch;
const twitchApi = require('twitch-api-v5');

const twitchKeys = require('./server/settings.js').twitch;
const clientId = twitchKeys.clientId;
const secret = twitchKeys.secret;

twitchApi.clientID = clientId;
twitchApi.secret = secret;

app.post('/api/getChannelsByUser', (req, res) => {
  twitch.getChannelsByUser(req.query.userId).then(response => {
    res.send(response);
  });
});

app.post('/api/getUserIdByUserName', (req, res) => {
  console.log(req.query);

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
});

app.listen(3000, () => {
  console.log('Client connected');
});
