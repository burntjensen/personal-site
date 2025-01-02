import { useState } from 'react'
import ProjectCard from './components/projectCard.jsx'
import Navbar from './components/nav.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Blog from './pages/blog.jsx';
import Home from './pages/home.jsx';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
