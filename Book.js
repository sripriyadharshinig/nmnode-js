const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
