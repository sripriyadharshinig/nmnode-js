const Book = require('../models/Book');

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new book
const addBook = async (req, res) => {
  const { id, title, author, category } = req.body;
  const book = new Book({ id, title, author, category });
  try {
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getBooks, addBook };
