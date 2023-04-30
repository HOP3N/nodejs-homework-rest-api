const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');
const { authorizeUser } = require('../middleware/authorization');

router.get('/', authorizeUser, contactController.getAll);
router.get('/:contactId', authorizeUser, contactController.getById);
router.post('/', authorizeUser, contactController.addContact);
router.put('/:contactId', authorizeUser, contactController.updateContact);
router.patch(
  '/:contactId/favorite',
  authorizeUser,
  contactController.setFavorite
);
router.delete('/:contactId', authorizeUser, contactController.removeContact);

module.exports = router;
