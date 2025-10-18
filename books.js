const express = require('express');
const router = express.Router();
const { getBooks, addBook } = require('../controllers/bookController');

// GET /books
router.get('/', getBooks);

// POST /books
router.post('/', addBook);

module.exports = router;
