var express = require("express");
const db = require("../models");
var router = express.Router();
const userDelete = require("../querys/deleteUser");

const consts = require("../constant/const");
const usersController = require("../controllers/users");

/* GET users listing if user is admin. */
router.get(consts.url_users, usersController.usersList);

/* GET authenticated user. */
router.get("/auth/me", usersController.authUser);

/* DELETE a user by id  */
router.delete(`${consts.url_users}/:id`, userDelete.deleteUser);

/* EDIT user */
router.patch(`${consts.url_users}/:id`, usersController.editUserPatch);

module.exports = router;
