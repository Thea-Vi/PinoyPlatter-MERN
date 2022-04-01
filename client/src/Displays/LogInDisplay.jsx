import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Actions/UserActions';



const LogInDisplay = () => {

    // state variables for the user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {

        if (localStorage.getItem("userCurrent"))
        {
            window.location.href="/"
        }
      
    }, [])

    // LOG IN FUNCTION FROM ACTIONS
    const login = (e) => {
        e.preventDefault()

        // store data into user - will send it to UserAction to post
        const user = {
            email,
            password
        }
        console.log(user)
        dispatch(loginUser(user))

    }

    return (
        <main style={{ backgroundImage: `url(https://static.onecms.io/wp-content/uploads/sites/9/2017/11/filipino-kamayan-FT-MAG1217.jpg)` }}>
            <div className='justify-content-center register '>
                <div className='col-md-4' >
                    <h1>Log In</h1>
                    <form className='form-group' required>
                        <div>
                            <label>Email Address</label>
                            <input required onChange={(e) => { setEmail(e.target.value) }} style={{ backgroundColor: "rgb(30,29,29)", color: "white" }} type="text" name="" className='form-control' value={email} />

                            <label>Password</label>
                            <input required onChange={(e) => { setPassword(e.target.value) }} style={{ backgroundColor: "rgb(30,29,29)", color: "white" }} type="text" name=""  className='form-control' value={password}/>
                        </div>
                        <button onClick={login}  className='btn btn-primary'>Log In</button>
                    </form>

                </div>

            </div>
        </main>
    )
}

export default LogInDisplay