import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
  <div className="container">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src="/logo.png"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">insurance</a>
        </li><li className="nav-item">
          <a className="nav-link" href="#contact_section">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Media
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Photos</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Social</a></li>
          </ul>
        </li>
      </ul>
      <a className="navbar-btn btn btn-lg btn-red lift ms-auto" href="#pricing_section">
        View Plans
      </a>
    </div>
  </div>
</nav>
</div>
</header>
    );
}

export default Header;