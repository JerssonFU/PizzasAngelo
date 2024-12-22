import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Mantenemos los estilos externos

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">MiLogo</div>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default NavBar;
