import React, { useState } from 'react'
import '../App.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='navbar'>
      <div className="heading">
        <h1>REACT LANDING PAGE</h1>
      </div>
      
      {/* Burger Menu Icon */}
      <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop Navigation */}
      <div className='nav-list desktop-nav'>
        <ul>
          <li>FEATURE</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>GALLERY</li>
          <li>TESTIMONIALS</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li onClick={closeMenu}>FEATURE</li>
            <li onClick={closeMenu}>ABOUT</li>
            <li onClick={closeMenu}>SERVICES</li>
            <li onClick={closeMenu}>GALLERY</li>
            <li onClick={closeMenu}>TESTIMONIALS</li>
            <li onClick={closeMenu}>TEAM</li>
            <li onClick={closeMenu}>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar