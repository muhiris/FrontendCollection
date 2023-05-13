import React, { useState } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";
function ManualOrder() {
  return (
    <div className="login-box">
      <h2>Manual Order</h2>
      <form>
        <div className="user-box">
          <input type="text" name required />
          <label>Product Name</label>
        </div>

        <div className="user-box">
          <input type="text" name />
          <label>Other Product (optional)</label>
        </div>

        <div className="user-box">
          <input type="text" name />
          <label>Other Product (optional)</label>
        </div>
        <div className="user-box">
          <input type="number" name required />
          <label>Total Price</label>
        </div>
        <Link to={"/"}>
          <span />
          <span />
          <span />
          <span />
          Confirm Order
        </Link>
      </form>
    </div>
  );
}

export default ManualOrder;
