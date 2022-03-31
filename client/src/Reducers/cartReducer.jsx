
export const cartReducer = (state = { cartItems: [] }, action) => {


    switch (action.type) {
        case 'ADD_TO_CART':

            // CHECK IF ITEM IS ALREADY IN THE CART - DONT DUPLICATE BUT UPDATE

            const alreadyInCart = state.cartItems.find(item => item._id === action.payload._id)
            if (alreadyInCart) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id
                        ? action.payload
                        : item)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]

                }       

            }
            case 'DELETE_FROM_CART' : return{
                // find items on the cart
                ...state,
                // items deleted and new items will be assigned on cartItems
                // filter = if item ID does not equal to the action.payload ID then pass as a new array
                cartItems : state.cartItems.filter(item => item._id !== action.payload._id)
                    
            }
        default: return state
    }


}