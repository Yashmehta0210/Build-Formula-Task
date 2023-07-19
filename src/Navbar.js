import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
     
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/task">Task</Link>
          
        </div>
      </div>
    </div>
  </nav>
    );
}

export default Navbar;
