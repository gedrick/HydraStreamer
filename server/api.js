const User = require('./models/user');
const settings = require('./settings.js');

function me(req, res) {
  res.json({
    user: req.user
  });
}

// WORK IN PROGRESS
function follow(req, res) {
  const userID = req.query.userID;
  const name = req.query.name;
  User.findOne({ _id: userID }, (err, record) => {
    console.log('found record:', record);
    res.status(200).json(record);
  });
}

module.exports = {
  me,
  follow
};