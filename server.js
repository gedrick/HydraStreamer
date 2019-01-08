const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const request = require('request');

const twitch = require('./server/api.js').twitch;
const twitchApi = require('twitch-api-v5');

const settings = require('./server/settings.js');

const clientId = settings.twitch.clientId;
const secret = settings.twitch.secret;
const sessionSecret =
  process.env.SESSION_SECRET || settings.twitch.session_secret;
const callback = process.env.CALLBACK || settings.twitch.callback;

const host = process.env.HOST || 'http://localhost:8080';

// Setup for Login with Twitch.
app.use(
  session({ secret: sessionSecret, resave: false, saveUninitialized: false })
);
// app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
  var options = {
    url: 'https://api.twitch.tv/helix/users',
    method: 'GET',
    headers: {
      'Client-ID': clientId,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: 'Bearer ' + accessToken
    }
  };

  request(options, (error, response, body) => {
    if (response && response.statusCode == 200) {
      done(null, JSON.parse(body));
    } else {
      done(JSON.parse(body));
    }
  });
};

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  'twitch',
  new OAuth2Strategy(
    {
      authorizationURL: 'https://id.twitch.tv/oauth2/authorize',
      tokenURL: 'https://id.twitch.tv/oauth2/token',
      clientID: clientId,
      clientSecret: secret,
      callbackURL: callback,
      state: true
    },
    (accessToken, refreshToken, profile, done) => {
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;

      // Securely store user profile in your DB
      //User.findOrCreate(..., function(err, user) {
      //  done(err, user);
      //});
      console.log(`accessToken=${accessToken}`);
      console.log(`refreshToken=${refreshToken}`);
      console.log(`profile=`, profile);

      done(null, profile);
    }
  )
);

// Set route to start OAuth link, this is where you define scopes to request
app.get(
  '/auth/twitch',
  passport.authenticate('twitch', { scope: 'user_read' })
);

// Set route for OAuth redirect
app.get(
  '/callback',
  passport.authenticate('twitch', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

app.get('/', (req, res) => {
  if (req.session && req.session.passport && req.session.passport.user) {
    res.redirect(301, `${host}/#/watch`);
  }
});

// Setup for Twitch API calls.
twitchApi.clientID = clientId;
twitchApi.secret = secret;
app.post('/api/getChannelsByUser', (req, res) => {
  twitch.getChannelsByUser(req.query.userId).then(response => {
    res.send(response);
  });
});

app.post('/api/getUserIdByUserName', (req, res) => {
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server operating on port ${port}`);
});
