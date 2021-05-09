const express = require("express");
const router = express.Router();

const contactsValidator = require("../middlewares/contactsValidator");

const consts = require("../constant/const");
const contactsController = require("../controllers/contacts");

/* GET contacts listing  */
router.get(consts.URL_CONTACTS, contactsController.registredContacts);

/* POST contact (name, email) */
router.post(
  consts.URL_CONTACTS,
  [contactsValidator.paramsValidator, contactsValidator.validationFunction],
  contactsController.createdContact
);

module.exports = router;
