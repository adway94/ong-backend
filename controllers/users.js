const jwt = require("jsonwebtoken");
const consts = require("../constant/const");
const usersListQuery = require("../querys/users");

// Check if the are any users in the data base.
exports.usersList = async (req, res, next) => {
  try {
    const users = await usersListQuery.getUsersList();
    users
      ? res.status(consts.code_success).send(users)
      : res.status(consts.code_failure).send(consts.ERROR_GET_USERS);
  } catch (err) {
    res.status(consts.code_failure).send(consts.ERROR_GET_USERS);
  }
};

// Authenticated user
exports.authUser = async (req, res, next) => {
  try {
    const token = req.headers[consts.AUTHORIZATION];
    if (!token) {
      return res.status(401).json({
        auth: false,
        message: consts.TOKEN_IS_NOT_PROVIDED,
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    const { id } = decoded.data;
    const user = await db.User.findAll({
      where: {
        id,
      },
      attributes: [
        consts.FIRST_NAME,
        consts.LAST_NAME,
        consts.EMAIL,
        consts.IMAGE,
      ],
    });
    if (!user) {
      return res.status(404).send(consts.NOT_FOUND_USER);
    }
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

exports.editUserPatch = async (req, res, next) => {
  try {
      const existUser = await usersListQuery.getUserById(req.params.id);
      if (existUser) {
          const userData = await usersListQuery.editUserPatch(
              req.body,
              req.params.id
          );
          const userNew = await usersListQuery.getUserById(req.params.id);
          res.status(consts.code_success).send(userNew);
      } else {
          res.status(consts.code_failure).send(consts.ERROR_USER_NOT_FOUND);
      }
  } catch (err) {
    res.status(consts.code_failure).send(consts.ERROR_UPDATE_USER);
  }
};