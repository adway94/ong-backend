const loginQuery = require("../querys/login");
var consts = require("../constant/const");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.loginAuth = async (req, res, next) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  try {
    const user = await loginQuery.getUserByEmail(emailInput);
    const userInDataBase = user.dataValues.email;
    const hash = user.dataValues.password;

    if (emailInput === userInDataBase) {
      const validPassword = await bcrypt.compare(passwordInput, hash);

      if (validPassword) {
        res.status(consts.code_success).send(user.dataValues);
      } else {
        res.status(consts.code_failure).send({ ok: false });
      }
    }
  } catch (err) {
    res.status(consts.code_failure).send({ ok: false });
  }
};

exports.loginValidator = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  next();
};
