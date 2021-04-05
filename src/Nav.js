import React from 'react'
import './App.css'
const Nav = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      SmartCow
    </div>
    <ul className="navbar-items">
      <li className="nav-item"><a href="/" className="nav-link">About</a></li>
      <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
      
    </ul>
  </nav>
  )
}

export default Nav
