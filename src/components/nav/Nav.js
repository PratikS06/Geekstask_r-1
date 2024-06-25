import React, { useEffect } from 'react';
import './Nav.css';
import ContactInfo from '../companyInfo/ContactInfo';

const Nav = () => {

  const logoutButton = (e)=>{
    e.preventDefault();
    window.location.href="/login"

  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-toggle" >
      </div>
      <ul className="main-nav" id="js-menu">
        <li>
          <a className="nav-links"><ContactInfo/></a>
        </li>
      </ul>
      <ul className="right-nav">
        <li>
          <button className="LogoutButton" onClick={logoutButton}>Logout</button>
          
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
