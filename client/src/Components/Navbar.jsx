import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { logoutUser } from "../Actions/UserActions";





const Navbar = () => {

  // UseSelector function takes the current start of the cart as an argument and returns the data 
  const cartState = useSelector(state => state.cartReducer)

  const userState = useSelector(state => state.loginUserReducer)
  const { userCurrent } = userState
  const dispatch = useDispatch()


  return (
    <nav style={{ backgroundImage: `url(https://img1.exportersindia.com/product_images/bc-full/2019/6/6454911/banana-leaves-1561757398-4976108.jpg)` }} className="navbar navbar-expand-lg " className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="pinoy-nav" style={{ textDecoration: 'none', backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/27/13/17/tomato-1862857__340.jpg)` }}>PINOY PLATTER</Link>
      <div>
      <ul className="left-nav">
        <li>
          <button className="btn btn-primary"><a href="/register">Register</a></button> &nbsp;
          {userCurrent ? (<h1>{userCurrent.email}</h1>) : (<button className="btn btn-primary"><a href="/login">LogIn</a></button>)}
          <h3><a href="/cart">Items {cartState.cartItems.length}</a></h3>
          <button className="btn btn-success" onClick={() => {dispatch(logoutUser())}}>Log Out</button>
        </li>
      </ul>

      </div>

      
    </nav >
  )
}
export default Navbar;
