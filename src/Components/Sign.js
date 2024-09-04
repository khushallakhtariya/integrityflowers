import React from "react";
import "../assets/sign/Sign.css";

function Sign() {

  return (
    <div className="sign-container">    
      <h1>Sign Page</h1>
      <form className="sign-form">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Sign;
