const sendMail = require("./mailApi");
const constant = require("../../constant/const");
const getUserPassword = require("../../querys/userPassword");

const changePasswordMail = (email) => {
  const userPassword = getUserPassword(email);
  const msg = {
    to: email, // Change to your recipient
    from: constant.COMPANY_MAIL, // Change to your verified sender
    subject: constant.MAIL_PASSWORD_CHANGE_SUBJECT,
    text: constant.MAIL_PASSWORD_CHANGE_TEXT,
    html: `<div style="font-family: inherit">Cambio de contraseña exitoso.</div>
    <div style="font-family: inherit"><br></div>
    <div style="font-family: inherit">Su nueva contraseña es: ${userPassword.password}</div>
    <div style="font-family: inherit"><br></div>
    <div style="font-family: inherit">Saluda Atentamente Equipo de Fundacion Zonas Grises</div>
    <div style="font-family: inherit"><br></div>`,
  };

  sendMail(msg);
};

module.exports = changePasswordMail;
