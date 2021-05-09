const constant = require("../../constant/const");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(constant.SENGRID_API_KEY);

function sendMail(msg) {
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendMail;
