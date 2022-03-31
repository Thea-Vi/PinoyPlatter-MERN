
import axios from 'axios'
// action name  //thunk function dispatch
export const getAllFoods = () => async dispatch =>{

    // reducer
    dispatch({
        type: 'GET_FOODS_REQUEST'
    })

    try{
        const response = await axios.get('/api/foods/getallfoods')
        console.log(response)
        dispatch({
            type: 'GET_FOODS_SUCCESS', payload :  response.data
        })
    } catch(error){
        dispatch({
            type: 'GET_FOODS_DENIED', payload : error
        })

    }

}