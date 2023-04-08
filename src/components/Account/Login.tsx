import React, {useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(false);
  const [keepLoginCheck,setKeepLoginCheck] = useState(false);
  const data = localStorage.getItem('signed_up_data');
  const signedUpData =  data !==null ? JSON.parse(data) : null;

  const loginHandler =(e:any)=>{
    e.preventDefault();
    if(email === signedUpData.emailId && password === signedUpData.yourPassword){
      setError(false);
      alert('Login Successfull');
      if(!keepLoginCheck){
        sessionStorage.setItem('logedin_data',JSON.stringify({email: email,password: password,fullname:signedUpData.fullName}))
      }else{
        sessionStorage.setItem('logedin_data',JSON.stringify({email: email,password: password,fullname:signedUpData.fullName}))
        localStorage.setItem('logedin_data',JSON.stringify({email: email,password: password,fullname:signedUpData.fullName}))
      }
      window.location.href ='/shop'
    }else{
      setError(true)
    }
  }


  return (
    <div className='signup_wrapper'>
      <form className="form" >
        <h1>YOUR ACCOUNT FOR EVERYTHING</h1>
        <input type='email' placeholder='Email Id' className='email_id' id='emailId' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Your Password' className='your_password' id='yourPassword' onChange={(e)=>setPassword(e.target.value)}/>
        {error && <p className='login_error'>Login Details are invalid</p>}
        <div className="login_validation_info">
          <div className='check_box_signedin'>
            <input type="checkbox" className="check_box" checked={keepLoginCheck} id="loginCheckbox" onChange={()=>setKeepLoginCheck(!keepLoginCheck)}/>
            <label htmlFor="loginCheckbox" >Keep me signed in</label>
          </div>
          <p className='forgot'>Forgot Password?</p>
        </div>
        <button type="submit" onClick={loginHandler}>Log In</button>
        <p>Not a memeber? 
          <Link to='/signup'>
            <span>Join Us</span>
          </Link>
          </p>
      </form>
    </div>
  )
}

export default Login
