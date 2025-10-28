import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="heading">
            <h1>REACT LANDING PAGE</h1>
        </div>
        <div className='nav-list'>
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
    </div>
  )
}

export default Navbar