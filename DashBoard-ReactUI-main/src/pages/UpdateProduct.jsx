import React from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";
function UpdateProduct() {
  return (
    <div className="login-box">
      <h2>Update Product</h2>
      <form>
        <a
          style={{
            backgroundColor: "powderblue",
            color: "gray",
            borderRadius: "10px",
            marginBottom: "35px",
          }}
          href="#"
        >
          Change Image
        </a>
        <div className="user-box">
          <input type="text" name required />
          <label>Product Name</label>
        </div>
        <div className="user-box">
          <input type="text" name required />
          <label>Description</label>
        </div>
        <Link to={"/crud"}>
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

export default UpdateProduct;
