const express = require("express");
const router = express.Router();
const consts = require("../constant/const");
const { body } = require("express-validator");
const multer = require("multer");

const membersController = require("../controllers/members");

/* Get members */
router.get("/", membersController.getMembers);

/* Create Member */
router.post(
  "/",
  multer(consts.MULTER_DESTINATION_PARAMS).single(consts.MULTER_KEY_NAME),
  membersController.createMember
);

/* Update Member */
router.put("/:id", membersController.updateMember);

/* Delete Member */
router.delete("/:id", membersController.deleteMember);

module.exports = router;
