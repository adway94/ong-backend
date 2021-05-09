const sendMail = require("./mailApi");
const constant = require("../../constant/const");
const getUserPassword = require("../../querys/userPassword");

const registerMail = (email) => {
  const userPassword = getUserPassword(email);
  const msg = {
    to: email, // Change to your recipient
    from: constant.COMPANY_MAIL, // Change to your verified sender
    subject: constant.MAIL_REGISTER_SUBJECT,
    text: constant.MAIL_REGISTER_TEXT,
    html: `<h1 style="text-align: center"><span style="font-size: 24px"><strong>¡Su registro se realizo exitosamente!</strong></span></h1>
		<div style="font-family: inherit; text-align: inherit">Los datos de su registro son los siguientes:</div>
<ul>
  <li style="text-align: inherit; font-family: inherit">Email: ${email}</li>
  <li style="text-align: inherit; font-family: inherit">Contraseña:${userPassword.password}</li>
</ul>
<div style="font-family: inherit; text-align: inherit">Saluda Atentamente Equipo de Fundacion Zonas Grises</div>`,
  };

  sendMail(msg);
};

module.exports = registerMail;
