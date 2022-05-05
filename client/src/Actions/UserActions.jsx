import axios from 'axios'

// TO REGISTER
export const registerUser = (user) => async dispatch => {
    // 
    // await is used for calling an async function and waits for it to resolve or reject
// await is used for calling an async function and waits for it to resolve or reject.
// await blocks the execution of the code within the async function in which it is located.
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        // posts the user data gathered from register form
        const response = await axios.post("/api/users/register", user)
        console.log(response);
        dispatch({ type: 'USER_REGISTER_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })
    }

}

// TO LOG IN
export const loginUser = (user) => async dispatch => {

    dispatch(
        { type: 'USER_LOGIN_REQUEST' }
    )
    try {
        // posts the user data gathered from log in form
        const response = await axios.post("/api/users/login", user)
        console.log(response);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
        // this saves the data into the local storage
        localStorage.setItem('userCurrent', JSON.stringify(response.data))

        // this directs to the "/"
        window.location.href="/"
    
    } catch (error) {
        dispatch(
            { type: 'USER_LOGIN_FAILED', payload: error }
        )
    }

}

// TO LOG OUT
export const logoutUser = () => dispatch => {

    localStorage.removeItem('userCurrent')
    window.location.href="/login"
  
}