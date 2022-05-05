import { combineReducers } from 'redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllFoodsReducer } from './Reducers/foodReducer'
import { cartReducer } from './Reducers/cartReducer'
import { loginUserReducer, registerUserReducer } from './Reducers/userReducer'

    


const finalReducer = combineReducers({
    getAllFoodsReducer: getAllFoodsReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer

    
})

// THIS CHECKS THE LOCAL STORAGE IF THERE'S A CART ITEM IN IT 
// convert the cartItems into JSON objectthen pass to the reducer

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userCurrent = localStorage.getItem('userCurrent') ? JSON.parse(localStorage.getItem('userCurrent')) : null

// THEN passes to the Cartreducer -- make sure to update the cart actions -localStorage
// FOR THE CART TO UPDATE - TO STORE DATA IN STORAGE - STATE AFTER REFRESHING
const initialState = {
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer: {
        userCurrent : userCurrent
    }   

}
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store