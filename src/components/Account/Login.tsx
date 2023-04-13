import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    login: false,
  });
  const [keepLoginCheck, setKeepLoginCheck] = useState(false);
  const data = localStorage.getItem("signed_up_data");
  const signedUpData = data !== null ? JSON.parse(data) : null;

  const navigate = useNavigate();

  const auth = getAuth();

  const emailValidate = (e: any) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      setError({ email: true, login: false });
    } else {
      setError({ email: false, login: false });
    }
  };

  const loginHandler = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError({ email: false, login: false });
        alert("Login Successful");
        if (!keepLoginCheck) {
          sessionStorage.setItem(
            "logedin_data",
            JSON.stringify({
              email: email,
              password: password,
              fullname: signedUpData.fullName,
            })
          );
        } else {
          sessionStorage.setItem(
            "logedin_data",
            JSON.stringify({
              email: email,
              password: password,
              fullname: signedUpData.fullName,
            })
          );
          localStorage.setItem(
            "logedin_data",
            JSON.stringify({
              email: email,
              password: password,
              fullname: signedUpData.fullName,
            })
          );
        }
        navigate("/shop/AllProducts");
      })
      .catch((error) => {
        if (error.email === false) {
          setError({ email: false, login: true });
        } else {
          setError({ email: true, login: true });
        }
      });
  };

  return (
    <div className="signup_wrapper">
      <form className="form">
        <h1>YOUR ACCOUNT FOR EVERYTHING</h1>
        <input
          type="email"
          placeholder="Email Id"
          className="email_id"
          id="emailId"
          onChange={(e: any) => emailValidate(e)}
        />
        {error.email && <p className="login_error">Invalid Email ID</p>}
        <input
          type="password"
          placeholder="Your Password"
          className="your_password"
          id="yourPassword"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.login && (
          <p className="login_error">Login Details are invalid</p>
        )}
        <div className="login_validation_info">
          <div className="check_box_signedin">
            <input
              type="checkbox"
              className="check_box"
              checked={keepLoginCheck}
              id="loginCheckbox"
              onChange={() => setKeepLoginCheck(!keepLoginCheck)}
            />
            <label htmlFor="loginCheckbox">Keep me signed in</label>
          </div>
          <p className="forgot">Forgot Password?</p>
        </div>
        <button type="submit" onClick={loginHandler}>
          Log In
        </button>
        <p>
          Not a memeber?
          <Link to="/signup">
            <span>Join Us</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
