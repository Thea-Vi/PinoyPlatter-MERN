import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const LogInDisplay = () => {
    return (
        <main style={{ backgroundImage: `url(https://nfg-sofun.s3.amazonaws.com/uploads/event/photo/11643/poster_board_860D83B9-B093-43CB-88D8-4871AADA8026.jpeg)` }}>
            <div className='justify-content-center register '>
                <div className='col-md-4' >
                    <h1>Log In</h1>
                    <form className='form-group'>
                        <div>


                            <label>Email Address</label>
                            <input style={{ backgroundColor: "rgb(30,29,29)", color: "white" }} type="text" name="" id="" className='form-control' />

                            <label>Password</label>
                            <input style={{ backgroundColor: "rgb(30,29,29)", color: "white" }} type="text" name="" id="" className='form-control' />

                        </div>
                        <button className='btn btn-primary'>Log In</button>
                    </form>
                    

                </div>

            </div>
        </main>
    )
}

export default LogInDisplay