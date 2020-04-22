import React from 'react';
import "../Navbar.css";

export default function Navbar() {
    return (
        <React.Fragment>
         <nav className="navbar navbar-expand-md navbar-light bg-light py-3">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          <h2 className="d-inline"><span>Digital</span>Watch<span>.com</span></h2>
        </a>
      </div>
  </nav>
        </React.Fragment>
    )
}
