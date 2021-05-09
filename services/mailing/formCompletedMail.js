const sendMail = require("./mailApi");
const constant = require("../../constant/const");

const formCompletedMail = (email) => {
  const msg = {
    to: email, // Change to your recipient
    from: constant.COMPANY_MAIL, // Change to your verified sender
    subject: constant.MAIL_CONTACT_FORM_SUBJECT,
    text: constant.MAIL_CONTACT_FORM_TEXT,
    html: `<div style="font-family: inherit">Recibimos su mensaje, nos estaremos comunicando a la brevedad.</div>
    <div style="font-family: inherit"><br></div>
    <div style="font-family: inherit">Saluda Atentamente Equipo de Fundacion Zonas Grises</div>
    <div style="font-family: inherit"><br></div>`,
  };

  sendMail(msg);
};

module.exports = formCompletedMail;
