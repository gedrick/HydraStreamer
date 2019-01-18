const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('flash');
const passport = require('passport');
const twitchStrategy = require('passport-twitch').Strategy;
const request = require('request');
const bodyParser = require('body-parser');

const settings = require('./server/settings.js');

const host = process.env.HOST || 'http://localhost:8080';

// Set up Mongo.
const mongoose = require('mongoose');
mongoose.Promise = Promise;
require('./server/db')(mongoose);
const User = require('./server/models/user.js');

// Setup for Login with Twitch.
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(session({
  secret: process.env.SESSION_SECRET || settings.login.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore(settings.mongo)
}));
server.use(flash());
server.use(express.static('./public'));
server.use(passport.initialize());
server.use(passport.session());

// Set up Passport.
passport.use(new twitchStrategy({
  clientID: process.env.TWITCH_CLIENT_ID || settings.twitch.clientId,
  clientSecret: process.env.TWITCH_CLIENT_SECRET || settings.twitch.secret,
  callbackURL: process.env.CALLBACK || settings.login.callback,
  scope: 'user_read'
}, (accessToken, refreshToken, profile, done) => {
  User.findOrCreate({
    id: profile.id,
    username: profile.displayName,
    email: profile.email,
    avatar: profile._json.logo,
    access_token: accessToken,
    refresh_token: refreshToken
  }).then(result => {
    return done(null, result);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// Home route.
server.get('/', (req, res) => {
  console.log('get / => req =', req.user, req.passport, req.session);
  if (req.user) {
    return res.redirect(`${host}/#/watch`);
  }

  return res.redirect('http://localhost:8080/')
});

server.get('/auth/twitch', passport.authenticate('twitch'));
server.get('/callback', passport.authenticate('twitch', {
  failureRedirect: '/'
}), (req, res) => {
  console.log('/callback:', req.user);
  res.redirect(`${host}/#/watch`);
});


// // Set up middleware.
// function isAuthenticated(req, res, next) {
//   if (!req.user) {
//     req.flash('error', 'You must be logged in.');
//     return res.redirect('/');
//   }

//   return next();
// }

// // Set up API routes.
// const apiRoutes = express.Router();

// apiRoutes.use(isAuthenticated);
// apiRoutes.get('/me', (req, res) => {
//   console.log('/api/me => ', req.user);
//   res.json({ user: req.user });
// });

// Setup for Twitch API calls.
const twitchApiHandlers = require('./server/api.js');
server.get('/api/searchGames', twitchApiHandlers.searchGames);
server.get('/api/searchStreams', twitchApiHandlers.searchStreams);
server.get('/api/getChannelsByUser', twitchApiHandlers.getChannelsByUser);
server.get('/api/getUserIdByUserName', twitchApiHandlers.getUserIdByUserName);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`server operating on port ${port}`);
});