const { validationResult, check } = require("express-validator");
const db = require("../models");
const consts = require("../constant/const");

const paramsValidator = [
  check("name")
    .isLength({ min: 3 })
    .withMessage(consts.EMPTY_CONTACT_NAME)
    .bail(),
  check("email").isEmail().withMessage(consts.EMPTY_CONTACT_EMAIL),
];

const validationFunction = (req, res, next) => {
  const errors = validationResult(req).array();
  if (errors && errors.length) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};

contactsValidator = { paramsValidator, validationFunction };

module.exports = contactsValidator;
