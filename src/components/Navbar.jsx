// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Asegúrate de tener el archivo CSS adecuado

const Navbar = () => {
  return (
    <header className="header">
      {/* Contenedor para el logo */}
      <div className="logo-container">
        <Link to="/" className="logo">PizzasAngelo</Link>
      </div>
      {/* Contenedor para los enlaces */}
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
