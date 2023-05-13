import React from "react";
import "../assets/css/login.css";
import { Outlet, Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name required />
          <label>Password</label>
        </div>
        <Link to={"/"}>
          <span />
          <span />
          <span />
          <span />
          Submit
        </Link>
      </form>
    </div>
  );
}

export default Login;
