const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  addBook,
  deleteBook
} = require('../controllers/bookController');

router.get('/', getAllBooks);
router.post('/', addBook);
router.delete('/:id', deleteBook);

module.exports = router;
