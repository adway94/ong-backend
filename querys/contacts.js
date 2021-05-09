const db = require("../models");
const Contact = db.Contact;

exports.getRegistredContacts = async () => {
  try {
    const contactsInDataBase = await Contact.findAll();
    return contactsInDataBase;
  } catch (err) {
    return err;
  }
};

exports.createContact = async (name, phone, email, message, deletedAt) => {
  const newContact = await Contact.create({
    name: name,
    phone: phone,
    email: email,
    message: message,
    deletedAt: deletedAt,
  });
  return newContact;
};
