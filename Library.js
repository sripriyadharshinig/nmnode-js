import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Library.css';

function Library({ books }) {
  const navigate = useNavigate();

  return (
    <div className="library-container">
      <div className="booklist-header">
        <h3 className="booklist-title">Book List</h3>
        <button className="add-book" onClick={() => navigate('/add-book')}>Add Book</button>
      </div>

      <div className="booklist">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Library;
