const db = require("../models");
const Organization = db.Organization;

exports.getOrganization = (orgId) => {
  return Organization.findOne({
    where: { id: orgId },
    attributes: [
      "name",
      "image",
      "phone",
      "address",
      "welcomeText",
      "contactFacebook",
      "contactLinkedin",
      "contactTwitter",
      "contactInstagram",
    ],
  });
};
