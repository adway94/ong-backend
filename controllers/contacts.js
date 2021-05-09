const consts = require("../constant/const");
const registredContactsQuery = require("../querys/contacts");

// Check if the are contacts in the data base
exports.registredContacts = async (req, res, next) => {
  try {
    const contacts = await registredContactsQuery.getRegistredContacts();
    contacts
      ? res.status(consts.code_success).send(contacts)
      : res.status(consts.code_failure).send(ERROR_GET_CONTACTS);
  } catch (err) {
    res.status(consts.code_failure).send(consts.ERROR_GET_CONTACTS);
  }
};

exports.createdContact = async (req, res) => {
  const { name, phone, email, message, deletedAt } = req.body;
  try {
    const newContact = await registredContactsQuery.createContact(
      name,
      phone,
      email,
      message,
      deletedAt
    );
    if (newContact) {
      res.status(201).json({
        message: consts.CREATED_CONTACT,
        contact: newContact,
      });
    }
  } catch (err) {
    res.status(consts.code_failure).json({
      message: err.message,
    });
  }
};
