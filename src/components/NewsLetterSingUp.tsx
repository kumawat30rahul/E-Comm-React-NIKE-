import React from "react";
import "../Css/SingUp.css";

function NewsLetterSingUp() {
  return (
    <div>
      <form>
        <div className="sing_up_box">
          <p className="sing_up_title">
            <em>SUBSCRIBE</em>
          </p>
          <p>
            Subscribe to our newsletter to stay updated with the latest trends and offers.
          </p>
          <input type="email" placeholder="Your Email" className="input" />
          <input type = "text" placeholder = "Your Full Name" className="input"></input>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewsLetterSingUp;
