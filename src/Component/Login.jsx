import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="section">
            <h1>Login</h1>
        </div>
        <div className="section">
            <label >Login Id</label>
            <input type='email' placeholder='Enter Login Id'/>
        </div>
        <div className="section">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter Password' />
        </div>
        <div className="section">
            <div className="checkbox-container">
            <div className="checkbox">
                <div><input type='checkbox' /> Remember me.</div>
                <div><input type='checkbox'/> Agree to <span>Terms & Conditions.</span> </div>
            </div>
            <div className="change-password-btn">
                <p>Change Password</p>
            </div>
            </div>
        </div>
        <div className="section">
            <button>Login</button>
        </div>
        <div className="section">
            <p>Don't have an account? <span>Register Here</span></p>
        </div>
      </div>
      </div>      
  )
}

export default Login