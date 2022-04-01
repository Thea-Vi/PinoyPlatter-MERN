
// REGISTER REDUCER
export const registerUserReducer = (state = {}, action) => {

    switch (action.type) 
    {

        case 'USER_REGISTER_REQUEST': return {
            loading: true
        }
        case 'USE_REGISTER_SUCCESS': return {
            loading: false,
            success: true,
            userCurrent: action.payload
        }
        case 'USER_REGISTER_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state
       
    }
}

// LOG IN REDUCER

export const loginUserReducer = (state = {}, action) => {

    switch (action.type) {

        case 'USER_LOGIN_REQUEST': return {
            loading: true
        }
        case 'USE_LOGIN_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'USER_LOGIN_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state        
    }
}