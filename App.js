import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Library from './components/Library';
import AddBook from './components/AddBook';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Sample Book", author: "John Doe", category: "Fiction" }
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/library" element={<Library books={books} />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
      </Routes>
    </Router>
  );
}

export default App;
