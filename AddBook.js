import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'; // ✅ Import the CSS

function AddBook() {
  const [form, setForm] = useState({ id: '', title: '', author: '', category: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/books/add', form);
      setMessage(res.data.message);
      setForm({ id: '', title: '', author: '', category: '' });
    } catch (error) {
      setMessage('❌ Error adding book');
      console.error(error);
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Book ID" value={form.id} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
        <button type="submit">Add Book</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddBook;
