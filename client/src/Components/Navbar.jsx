import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'



const Navbar = () => {

  // UseSelector function takes the current start of the cart as an argument and returns the data 
  const cartState = useSelector(state => state.cartReducer)



  return (
    <div>
      <nav style={{ backgroundImage: `url(https://img1.exportersindia.com/product_images/bc-full/2019/6/6454911/banana-leaves-1561757398-4976108.jpg)` }} className="navbar navbar-expand-lg ">
        
        <Link to="/" className="pinoy-nav" style={{ textDecoration: 'none', backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/27/13/17/tomato-1862857__340.jpg)` }}  >PINOY PLATTER</Link>
        <div className="right-btns" style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/27/13/17/tomato-1862857__340.jpg)`}}>

          <button className="log-in"><Link to="/login">LogIn</Link></button>
          <button className="register-btn"><Link to="/register">Register</Link></button>
          <button className="cart"><Link to="cart">Items {cartState.cartItems.length}</Link></button>
        </div>
      </nav>


    </div>
  );
};

export default Navbar;
