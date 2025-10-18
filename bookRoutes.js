const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// POST: Add new book
router.post('/add', async (req, res) => {
  try {
    const { id, title, author, category } = req.body;
    const newBook = new Book({ id, title, author, category });
    await newBook.save();
    res.json({ message: '✅ Book added successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: View all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
