import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { registerUser } from '../Actions/UserActions';


const RegisterDisplay = () => {


    // state variables for the user input
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    const register = (e) => {
        // e.preventDefault()
        if (password !== confirmPassword){
            alert("password must match")
        }else{
            // store data into user - will send it to UserAction to post
            const user = {
                fullName, 
                email, 
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
      
    }
      



    return (
        <main style={{backgroundImage: `url(https://nfg-sofun.s3.amazonaws.com/uploads/event/photo/11643/poster_board_860D83B9-B093-43CB-88D8-4871AADA8026.jpeg)`}}>
            <div className='justify-content-center register '>
                <div className='col-md-4' >
                    <h1>Register</h1>
                    <form className='form-group'>
                        <div>
                            <label>Full Name</label>
                            <input onChange={(e) => {setFullName(e.target.value)}} style={{backgroundColor: "rgb(30,29,29)", color: "white"}} type="text" name="" required className='form-control' value={fullName}/>
                        
                            <label>Email Address</label>
                            <input onChange={(e) => {setEmail(e.target.value)}} style={{backgroundColor: "rgb(30,29,29)", color: "white"}} type="text" name="" required className='form-control' value={email}/>
                        
                            <label>Password</label>
                            <input onChange={(e) => {setPassword(e.target.value)}} style={{backgroundColor: "rgb(30,29,29)", color: "white"}} type="text" name="" required className='form-control' value={password} />
                        
                            <label>Confirm Password</label>
                            <input onChange={(e) => {setConfirmPassword(e.target.value)}} style={{backgroundColor: "rgb(30,29,29)", color: "white"}} type="text" name="" required className='form-control' value={confirmPassword}/>
                        </div>
                        <button onClick={register} className='btn btn-primary'>Register</button>
                    </form>
                    <button className='btn btn-warning'><Link to="/login">Log In</Link></button>
                </div>
                

            </div>
        </main>
    )
}

export default RegisterDisplay