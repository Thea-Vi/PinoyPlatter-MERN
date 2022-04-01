import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const LogInDisplay = () => {
    return (
        <main style={{ backgroundImage: `url(https://www.pilotonline.com/resizer/1xf3rbjTQRMIug3lKNGCZ4pkgvQ=/800x1066/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/JXO2G4CMR5G4JPUJGAK57727TA.jpg)` }}>
            <div className='justify-content-center register '>
                <div className='col-md-4' >
                    <h1 log-in>Log In</h1>
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