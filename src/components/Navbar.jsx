import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">PizzasAngelo</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Shop</a>
            <a href="/">services</a>
            <a href="/">Contact</a>


        </nav>
    </header>
  )
}

export default NavBar