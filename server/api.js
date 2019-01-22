const User = require('./models/user');

function me(req, res) {
  res.json({
    user: req.user
  });
}

// WORK IN PROGRESS
function follow(req, res) {
  const userID = req.body.userID;
  const channelData = req.body.channelData;
  const toggle = req.body.toggle;

  User.findById(userID, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else {
      let newFavorites = [...doc.favorites];

      if (toggle) {
        newFavorites.push({...channelData});
        console.log(newFavorites);

      } else {
        newFavorites = newFavorites.filter(favorite => favorite.name !== channelData.channel.name);
      }
      doc.favorites = newFavorites;

      doc.save(() => {
        res.status(200).json({ result: 'OK' });
      });
    }
  });
}

module.exports = {
  me,
  follow
};