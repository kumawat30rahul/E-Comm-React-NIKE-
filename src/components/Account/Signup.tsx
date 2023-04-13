import React, { useState } from "react";
import "./signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [gender, setGender] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    yourPassword: "",
    confirmPassword: "",
    gender: "",
  });
  const [error, setError] = useState({
    fullName: false,
    emailId: false,
    yourPassword: false,
    confirmPassword: false,
    gender: false,
  });
  const handleGenderClick = (selectedGender: any) => {
    setGender(selectedGender);
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));
    setError((prevData) => ({
      ...prevData,
      gender: false,
    }));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z ]{2,}$/;

  const validateName = (event: any) => {
    const { id, value } = event.target;
    if (!nameRegex.test(event.target.value)) {
      setError((prevData) => ({
        ...prevData,
        [id]: true,
      }));
    } else {
      setError((prevData) => ({
        ...prevData,
        [id]: false,
      }));
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  const validateEmail = (event: any) => {
    const { id, value } = event.target;
    if (!emailRegex.test(event.target.value)) {
      setError((prevData) => ({
        ...prevData,
        [id]: true,
      }));
    } else {
      setError((prevData) => ({
        ...prevData,
        [id]: false,
      }));
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  const validatePasword = (event: any) => {
    event.preventDefault();
    const { id, value } = event.target;
    if (event.target.value.length < 8) {
      setError((prevData) => ({
        ...prevData,
        [id]: true,
      }));
    } else {
      setError((prevData) => ({
        ...prevData,
        [id]: false,
      }));
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  const validateConfirmPassword = (event: any) => {
    const { id, value } = event.target;
    if (event.target.value !== formData.yourPassword) {
      setError((prevData) => ({
        ...prevData,
        [id]: true,
      }));
    } else {
      setError((prevData) => ({
        ...prevData,
        [id]: false,
      }));
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const auth = getAuth();
  const navigate = useNavigate();
  const formSubmit = (e: any) => {
    e.preventDefault();
    if (
      !error.confirmPassword &&
      !error.fullName &&
      !error.emailId &&
      !error.gender &&
      !error.yourPassword &&
      !error.gender &&
      formData.fullName !== "" &&
      formData.emailId !== "" &&
      formData.yourPassword !== "" &&
      formData.confirmPassword !== "" &&
      formData.gender !== ""
    ) {
      alert("Successfully SignedUp");
      navigate("/login");
      setFormData((prevData) => ({
        ...prevData,
        gender: gender,
      }));
      localStorage.setItem("signed_up_data", JSON.stringify(formData));
      try {
        createUserWithEmailAndPassword(
          auth,
          formData.emailId,
          formData.yourPassword
        );
      } catch {
        console.log("user not added");
      }
    } else {
      alert("Provide Valid Details");
      setError((prevData) => ({
        ...prevData,
      }));
    }
  };

  return (
    <div className="signup_wrapper">
      <form className="form">
        <h1 className="sign_up_title">BECOME A MEMBER</h1>
        <p className="signup_para">
          Create your profile and get acess to premium products
        </p>
        <input
          type="email"
          placeholder="Email Id"
          className="email_id"
          id="emailId"
          onChange={validateEmail}
        />
        {error.emailId && (
          <p className="error_message email_error">
            Please provide a valid email id.
          </p>
        )}

        <input
          type="text"
          placeholder="Full Name"
          className="full_name"
          id="fullName"
          onChange={validateName}
        />
        {error.fullName && (
          <p className="error_message fullname_error">
            Please provide a valid name. Name must be 2 words
          </p>
        )}

        <input
          type="password"
          placeholder="Your Password"
          className="your_password"
          id="yourPassword"
          onChange={validatePasword}
        />
        {error.yourPassword && (
          <p className="error_message password_error">
            Password does not meet minimum requirements.
          </p>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          className="confirm_password"
          id="confirmPassword"
          onChange={validateConfirmPassword}
        />
        {error.confirmPassword && (
          <p className="error_message confirmpass_error">
            Password does not match.
          </p>
        )}
        <div className="gender">
          <div className="male">
            <input
              type="button"
              className={`gender_input ${gender === "male" ? "active" : ""}`}
              onClick={() => handleGenderClick("male")}
            />
            <span>Male</span>
          </div>
          <div className="female">
            <input
              type="button"
              className={`gender_input ${gender === "female" ? "active" : ""}`}
              onClick={() => handleGenderClick("female")}
            />
            <span>Female</span>
          </div>
        </div>
        {error.gender && (
          <p className="error_message confirmpass_error">Select Gender.</p>
        )}

        <button type="submit" onClick={formSubmit}>
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Signup;
