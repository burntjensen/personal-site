import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
    </nav>
  );
}