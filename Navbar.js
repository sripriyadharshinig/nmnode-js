import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">📖 NextGen Library</div>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/information">Explore</NavLink>
        <NavLink to="/help">Genres</NavLink>
        <NavLink to="/librarian">Events</NavLink>
        <NavLink to="/librarian">Librarian</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/member">Member Login</NavLink>
      </nav>
    </header>
  );
}
