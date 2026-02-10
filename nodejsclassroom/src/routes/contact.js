const express = require('express');
const router = express.Router();

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  searchContacts
} = require('../controller/contactController');

router.route('/')
  .get(getContacts)
  .post(createContact);

router.route('/search/:keyword')
  .get(searchContacts);

router.route('/:id')
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
