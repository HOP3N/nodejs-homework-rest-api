const Contact = require('./schemas/contacts');

const getAllContacts = async () => Contact.find();

const getContactById = async (contactId) => Contact.fyndById(contactId);

const createContact = async ({ name, email, phone, favorite }) => {
  return Contact.create({ name, email, phone, favorite });
};

const updateContact = async (contactId, fields) => {
  return Contact.findByIdAndUpdate(contactId, fields, {
    new: true,
    strict: 'trow',
    runValidators: true,
  });
};
const updateStatusContact = async (contactId, favorite) => {
  return Contact.findByIdAndUpdate(contactId, { favorite });
};

const deleteContact = async (contactId) => Contact.findByIdAndRemove(contactId);

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  updateStatusContact,
  deleteContact,
};
