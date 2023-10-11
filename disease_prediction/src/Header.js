import React from 'react'
import logo from './images/logo.png';
import hamMenuIcon from './images/ham-menu-icon.png';
import closeIcon from './images/close-icon.png';
import searchIconDark from './images/search-icon-dark.png';
import { Link } from 'react-router-dom';

import headerImage from './images/Header.png';
import aboutImg from './images/about-img.png';
function Header() {
  return (
   
    <nav className="navbar  " style={{background:"#1AACAC"}}>
      <div className="container flex">
        <a href="index.html" className="navbar-brand">
          <img src={logo} alt="site logo" />
        </a>
        <button type="button" className="navbar-show-btn">
          <img src={hamMenuIcon} alt="menu icon" />
        </button>

        <div className="navbar-collapse bg-white">
          <button type="button" className="navbar-hide-btn">
            <img src={closeIcon} alt="close icon" />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <Link  to="/detection " className="nav-link " >Tumor Detection</Link>
            </li>
            <li className="nav-item">
              <a href="doc.html" className="nav-link">Doctors</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
          <div className="search-bar">
            <form>
              <div className="search-bar-box flex">
                <span className="search-icon flex">
                  <img src={searchIconDark} alt="search icon" />
                </span>
                <input type="search" className="search-control" placeholder="Search here" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Header
