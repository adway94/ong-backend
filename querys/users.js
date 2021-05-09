const db = require("../models");
let consts = require("../constant/const");
const User = db.User;

exports.getUsersList = async () => {
  try {
    const usersInDataBase = await User.findAll();
    return usersInDataBase;
  } catch (err) {
    return err;
  }
};

exports.createUser = (firstName, lastName, email, password) => {
  return User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    roleId: consts.DEFAULT_ROLE_ID,
    organizationId: consts.DEFAULT_ORG_ID
  });
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findOne({
      where: { id: id },
    });
    console.log(user)
    return user;
  } catch (err) {
    return err;
  }
}

exports.editUserPatch = async (data,id) => {
  try {
    const updatedUser = await User.update(data, {
      where: { id: id },
    });
    return updatedUser;
  } catch (err) {
    return err;
  }
}