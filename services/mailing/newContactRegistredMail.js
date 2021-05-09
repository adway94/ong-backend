const sendMail = require("./mailApi");
const constant = require("../../constant/const");

const newContactRegistredMail = (newContactUser, email) => {
  const msg = {
    to: email, // Change to your recipient
    from: constant.COMPANY_MAIL, // Change to your verified sender
    subject: constant.MAIL_NEW_CONTACT_SUBJECT,
    text: constant.MAIL_NEW_CONTACT_TEXT,
    html: `<h3 style="text-align: center"><span style="font-size: 24px"><strong>Muchas gracias ${newContactUser} por registrate en nuestra base de datos.</strong></span></h3>
    <div style="font-family: inherit; text-align: inherit">Saluda Atentamente Equipo de Fundacion Zonas Grises</div>`,
  };

  sendMail(msg);
};

module.exports = newContactRegistredMail;
