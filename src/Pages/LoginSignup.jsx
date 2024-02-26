import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = ()=>{
    return(
        <div className='loginsignup'>
            <div className="loginsignup2">
                <h1>SIGNUP</h1>
                <div className="inputs">
                    <input type='text' placeholder='ENTER NAME'/>
                    <input type='email' placeholder='ENTER EMAIL'/>
                    <input type='password' placeholder='enter password'/>
                 </div>
                 <div className="input-btn">
                    <button>SIGNUP</button>
                    <p>Already have an account?<span>LOGIN HERE</span></p>
                 </div>
            </div>
        
        </div>
    )
}
export default LoginSignup;