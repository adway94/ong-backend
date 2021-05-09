const { validationResult } = require('express-validator');
const db = require('../models');
const consts = require("../constant/const");
const User = db.User;

checkEmailPassword = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(consts.CODE_FAILURE_400).json({ errors: validationErrors.array() });
    }
    next();
};

checkDuplicateEmail = (req, res, next) => {
    // Look for User with email in request
    User.findOne({
        where: {email: req.body.email}
    }).then(user => {
        // If user with email exists, cancel validation
        if (user) {
            res.status(consts.code_failure).send({message: consts.DUPLICATE_EMAIL_MSG});
            return;
        }
        next();
    }).catch(err => console.log(err));
};

const authValidator = {
    checkEmailPassword,
    checkDuplicateEmail
};

module.exports = authValidator;