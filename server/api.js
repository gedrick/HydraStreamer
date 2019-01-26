const User = require('./models/user');

function me(req, res) {
  if (req.isAuthenticated())  {
    res.json({
      user: req.user
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

module.exports = {
  me,
  favorite,
  unfavorite
};