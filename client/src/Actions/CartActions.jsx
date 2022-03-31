import { FormControl } from "react-bootstrap"


// ADD ITEM TO CART 
export const addToCart = (food, quantity, platters) => (dispatch, getState) => {

    const cartItem = {
        name: food.name,
        _id: food._id,
        image: food.image,
        platters: platters,
        // convert the string to number to do the operation below
        quantity: Number(quantity),
        prices: food.prices,
        price: food.prices[0][platters] * quantity
    }
    // order is more than 5
    if (cartItem.quantity > 5) {
        alert("Quantity 5 is the maximum limit")
    }
    else {
        // order is less than zero, delete the item
        if (cartItem.quantity < 1) {
            dispatch({ type: "DELETE_FROM_CART", payload: food })

        } else {
            // dispatch the action
            dispatch({
                type: 'ADD_TO_CART', payload: cartItem
                // payload = contents of the action

            })
        }
    }

    // us LocalStorage to keep data after refreshing the page

    const cartItems = getState().cartReducer.cartItems

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

// DELETE ITEMS FROM CART PAGE
export const deleteItemCart = (food) => (dispatch, getState) => {

    dispatch({ type: "DELETE_FROM_CART", payload: food })

    // us LocalStorage to remove data after refreshing the page
    const cartItems = getState().cartReducer.cartItems

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}