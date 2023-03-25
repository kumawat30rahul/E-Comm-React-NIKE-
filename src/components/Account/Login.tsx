import React from 'react'
import './login.css'

function Login() {

  return (
    <div className='signup_wrapper'>
      <form className="form">
        <h1>YOUR ACCOUNT FOR EVERYTHING</h1>
        <input type='email' placeholder='Email Id' className='email_id' id='emailId' />
        <input type='password' placeholder='Your Password' className='your_password' id='yourPassword' />
        <div className="login_validation_info">
          <div className='check_box_signedin'>
            <input type="checkbox" className="check_box" id="loginCheckbox"/>
            <label htmlFor="loginCheckbox" >Keep me signed in</label>
          </div>
          <p className='forgot'>Forgot Password?</p>
        </div>
        <button type="submit">Log In</button>
        <p>Not a memeber? <span>Join Us</span></p>
      </form>
    </div>
  )
}

export default Login
