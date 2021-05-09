const db = require("../models");
const User = db.User;

exports.getUserPassword = (email) => {
  return User.findOne({
    where: { email: email },
    attributes: ["password"],
  });
};
