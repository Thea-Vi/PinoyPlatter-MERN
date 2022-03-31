import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {

  // UseSelector function takes the current start of the cart as an argument and returns the data 
  const cartState = useSelector(state => state.cartReducer)



  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href="/register">
                Have an account? Please log in
              </a>
            </li>
            <li className="nav-item">
              <a className="" href="/cart">
                Items {cartState.cartItems.length}
              </a>
         
            </li>
           
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
