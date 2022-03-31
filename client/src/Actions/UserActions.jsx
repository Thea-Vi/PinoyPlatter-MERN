import axios from 'axios'

export const registerUser = (user) => async dispatch => {

    dispatch(
        {type: 'USER_REGISTER_REQUEST'}
    )
    try {
        // posts the user data gathered from register form
        const response = await axios.post("/api/users/register", user)
        console.log(response);
        dispatch(
            {type: 'USER_REQUEST_SUCCESS'}
        )
    }catch (error) {
        dispatch(
            {type: 'USER_REGISTER_FAILED', payload: error}
        )
    }
  
}