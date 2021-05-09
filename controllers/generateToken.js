const jwt = require("jsonwebtoken");

function generateToken(data) {
    const token = jwt.sign({ data }, process.env.SECRET_TOKEN, {
        expiresIn: 60 * 60 * 24, // 24hs
    });
    return { token };
}

module.exports = generateToken;
