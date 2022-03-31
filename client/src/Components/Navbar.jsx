import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-none p-3 mb-5 bg-light rounded">
        <a className="navbar-brand" href="#">
          PINOY PLATTER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                LOGIN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CART
              </a>
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
