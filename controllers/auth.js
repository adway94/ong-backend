const userQuery = require("../querys/users");
const bcrypt = require("bcrypt");
let consts = require("../constant/const");
const generateToken = require("./generateToken");

exports.register = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, consts.SALT_ROUNDS);

    userQuery.createUser(
        req.body.firstName, req.body.lastName, req.body.email, password)
    .then((newUser) => {
        const token = generateToken(newUser.password);
        res.status(consts.code_success).send(token);
    }).catch(err => res.status(consts.code_failure).send({message: err.message}));
};