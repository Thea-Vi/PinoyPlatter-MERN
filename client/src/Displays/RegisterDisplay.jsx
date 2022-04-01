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
        <main style={{backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/576c194cf5e231d654d02378/1479430130486-3I4R5GM4OVVDLX96R9UP/image-asset.jpeg?format=1000w)`}}>
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