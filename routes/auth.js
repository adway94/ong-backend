const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");
const authValidator = require("../middlewares/authValidator");
const authController = require("../controllers/auth");
const consts = require("../constant/const");

/* POST login with email and password. */
router.post(
  consts.url_auth_login,
  consts.loginValuesFieldValidator,
  loginController.loginValidator,
  loginController.loginAuth
);

/* POST register with all user data (first/last name, email, password) */
router.post(
  consts.URL_AUTH_REGISTER,
  consts.loginValuesFieldValidator,
  authValidator.checkEmailPassword,
  authValidator.checkDuplicateEmail,
  authController.register
);

module.exports = router;
