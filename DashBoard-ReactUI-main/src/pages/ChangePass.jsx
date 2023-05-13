import React from "react";

function ChangePass() {
  return (
    <div className="login-box">
      <h2>Change Password</h2>
      <form>
        <div className="user-box">
          <input type="text" name required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name required />
          <label>Password</label>
        </div>
        <a href="#">
          <span />
          <span />
          <span />
          <span />
          Confirm
        </a>
      </form>
    </div>
  );
}

export default ChangePass;
