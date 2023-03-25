import React, { useState } from 'react'
import './signup.css'

function Signup() {
  const [gender, setGender] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    emailId: '',
    yourPassword: '',
    confirmPassword: '',
    gender: '',
  })
  const [error,setError] = useState(false);

  const handleGenderClick = (selectedGender:any) => {
    setGender(selectedGender);
  }
  const handleInput =(e:any)=>{
    const {id,value} = e.target
    setFormData((prevData)=>({
      ...prevData,
      [id]: value,
    }))
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  const nameRegex = /^[a-zA-Z ]{2,}$/;

  const formSubmitHandler =(e:any)=>{
    e.preventDefault()
    let formIsValid = true;

    if(!formData.fullName){
      formIsValid = false;
      setError(true);
    }
    if(!emailRegex.test(formData.emailId)){
      formIsValid = false;
      setError(true);
    }
    if (!nameRegex.test(formData.fullName)) {
      setError(true);
      formIsValid = false;
    }
    if (formData.yourPassword.length < 8) {
      setError(true);
      formIsValid = false;
    }
    if (formData.yourPassword !== formData.confirmPassword) {
      setError(true);
      formIsValid = false;
    }
    if (formIsValid) {
      localStorage.setItem('signup_data', JSON.stringify(formData))
      setError(false);
      alert("Succesfuly SignedUp")
      window.location.href = '/shop'
    }
  }
  return (
    <div className='signup_wrapper'>
      <form className="form" onSubmit={formSubmitHandler}>
        <h1 className='sign_up_title'>BECOME A MEMBER</h1>
        <p className='signup_para'>Create your profile and get acess to premium products</p>
        <input type='email' placeholder='Email Id' className='email_id' id='emailId' onChange={handleInput} />
        {error && !formData.fullName && <p className='error_message fullname_error'>Please provide a valid name.</p>}
        <input type='text' placeholder='Full Name' className='full_name' id='fullName' onChange={handleInput} />
        {error && !emailRegex.test(formData.emailId) && <p className='error_message email_error'>Please provide a valid email id.</p>}
        <input type='password' placeholder='Your Password' className='your_password' id='yourPassword' onChange={handleInput} />
        {error && formData.yourPassword.length < 8 && <p className='error_message password_error'>Password does not meet minimum requirements.</p>}
        <input type='password' placeholder='Confirm Password' className='confirm_password' id='confirmPassword' onChange={handleInput} />
        {error && formData.yourPassword !== formData.confirmPassword && <p className='error_message confirmpass_error'>Password does not match.</p>}
        <div className='gender'>
          <div className="male">
            <input
              type='button'
              className={`gender_input ${gender === 'male' ? 'active' : ''}`}
              onClick={() => handleGenderClick('male')}
            />
            <span>Male</span>
          </div>
          <div className="female">
            <input
              type='button'
              className={`gender_input ${gender === 'female' ? 'active' : ''}`}
              onClick={() => handleGenderClick('female')}
            />
            <span>Female</span>
          </div>
        </div>
        <button type="submit">REGISTER</button>
      </form>
    </div>
  )
}

export default Signup
