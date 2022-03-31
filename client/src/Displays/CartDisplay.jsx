import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Actions/CartActions'
import { deleteItemCart } from '../Actions/CartActions'

const CartDisplay = () => {

 // useSelector- takes current state as an arg and returns whatever data you want from it

    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch()

    

    // trying out reduce instead of For loop counter
    // #2 params (prev value, item to be looped through) 0 = initial value
    let subTotal = cartItems.reduce((x, item) => x + item.price, 0 )

    
    let tax = subTotal * Number(.1)
    let finalTotal = subTotal + tax
   





    return (
        <div>
            <h1 className='row justify-content-center'>

                <div className='col-md-6'>
                    <h1>Order Details</h1>
                    {cartItems.map((item, i) => {
                        return (
                            <div className='itemcartbox'>
                                <div className="d-flex p-2">
                                    <h2> {item.platters} - {item.name} </h2>
                                </div>

                                <div>
                                    <h2>Price: {item.quantity} * {item.prices[0][item.platters]} = ${item.price}</h2>
                                    <div>

                                        <h3>Update order: </h3>
                                        <button onClick={() => {dispatch(addToCart(item, item.quantity - (1), item.platters))}}> - </button> &nbsp; 
                                        <b>{item.quantity}</b> &nbsp;
                                        <button onClick={() => {dispatch(addToCart(item, item.quantity + (1), item.platters))}}> + </button> &nbsp;
                                        <img src={item.image} style={{width: "100px", height: "100px"}} />
                                    </div>
                                        <button className='btn btn-danger' onClick={() => {dispatch(deleteItemCart(item))}}>Remove Item</button>
                                    

                                </div>
                            </div>

                        )

                    })}



                </div>
                <div>
                    <h1>SubTotal: ${subTotal}</h1>
                    <h6>+ tax(10%)</h6>
                    
                    <p>Total: {finalTotal}</p>
                    <button className='btn btn-primary'>Check Out</button>
                </div>

            </h1>
        </div>
    )
}

export default CartDisplay