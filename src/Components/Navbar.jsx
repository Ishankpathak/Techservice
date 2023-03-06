import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-white ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TechServices</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-end ">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/service" >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
