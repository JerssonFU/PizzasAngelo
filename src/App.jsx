// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';  // Asegúrate de que el CSS esté importado

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/store" element={<h1>Store Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
