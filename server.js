const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const twitchStrategy = require('passport-twitch').Strategy;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const host = process.env.HOST || 'http://localhost:8080';
const port = process.env.PORT || 3000;

const encrypt = require('./server/encryption').encrypt;
const settings = require('./server/settings');

// Set up Mongo.
const mongoose = require('mongoose');
mongoose.Promise = Promise;
require('./server/db')(mongoose);
const User = require('./server/models/user.js');

// Setup for Login with Twitch.
const server = express();
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(session({
  secret: settings.login.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore(settings.mongo)
}));
server.use(express.static('./dist'));
server.use(passport.initialize());
server.use(passport.session());

// Set up Passport.
passport.use(new twitchStrategy({
  clientID: settings.twitch.clientId,
  clientSecret: settings.twitch.secret,
  callbackURL: settings.login.callback,
  scope: settings.twitch.scopes
}, (accessToken, refreshToken, profile, done) => {
  User.findOrCreate({
    id: profile.id,
  }, {
    id: profile.id,
    username: profile.displayName,
    email: profile.email,
    avatar: profile._json.logo,
    access_token: encrypt(accessToken),
    refresh_token: encrypt(refreshToken)
  }).then((result) => {
    return done(null, result);
  });
}));

passport.serializeUser(function (user, done) {
  // Only store the user id.
  done(null, user.doc._id);
});

passport.deserializeUser(function (id, done) {
  // Retrieve user by stored user id.
  User.findById(id, (err, user) => {
    if (err) {
      console.log('deserializeUser error:', err);
    }
    done(null, user);
  });
});

server.get('/auth/twitch', passport.authenticate('twitch'));
server.get('/auth/callback', passport.authenticate('twitch', {
  failureRedirect: '/'
}), (req, res) => {
  res.cookie('isLoggedIn', true, {maxAge: 10800, httpOnly: false}).redirect(`${host}/#/watch`);
});

// Set up middleware.
function isAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).send({
      code: 401,
      message: 'Not logged in'
    });
  }

  return next();
}

// Set up api routes.
const apiRoutes = express.Router();
const apiHandlers = require('./server/api.js');
apiRoutes.use(isAuthenticated);
apiRoutes.get('/me', apiHandlers.me);
apiRoutes.get('/app', apiHandlers.app);
apiRoutes.post('/favorite', apiHandlers.favorite);
apiRoutes.post('/unfavorite', apiHandlers.unfavorite);
server.use('/api', apiRoutes);

// Set up data routes.
const dataRoutes = express.Router();
const dataHandlers = require('./server/data.js');
dataRoutes.use(isAuthenticated);
dataRoutes.get('/searchGames', dataHandlers.searchGames);
dataRoutes.get('/searchStreams', dataHandlers.searchStreams);
dataRoutes.get('/userIsHosting', dataHandlers.userIsHosting);
dataRoutes.get('/getChannelsByUser', dataHandlers.getChannelsByUser);
dataRoutes.get('/getUserIdByUserName', dataHandlers.getUserIdByUserName);
dataRoutes.get('/getUserChannels', dataHandlers.getUserChannels);
dataRoutes.get('/getChannelLiveStatus', dataHandlers.getChannelLiveStatus);
dataRoutes.get('/getPopularGames', dataHandlers.getPopularGames);
server.use('/data', dataRoutes);

// Home route.
server.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.cookie('isLoggedIn', true, {maxAge: 10800, httpOnly: false}).redirect(`${host}/#/watch`);
  }
  return res.redirect(host);
});

server.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('isLoggedIn');
  res.redirect('/#/?loggedOut=true');
});

// Start the server.
server.listen(port, () => {
  console.log(`server operating on port ${port}`);
});