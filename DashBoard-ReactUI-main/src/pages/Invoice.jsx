import React, { useState } from "react";
import "../assets/css/login.css";
import easyinvoice from "easyinvoice";
function Invoice() {
  // To Generate Invoice
  // https://www.npmjs.com/package/easyinvoice
  // ***********************************************************
  // ***********************************************************
  // ***********************************************************
  //   easyinvoice.createInvoice(saveInvoice, function (result) {
  //     console.log("PDF base64 string: ", result.pdf);
  //   });
  // ***********************************************************
  // ***********************************************************
  // ***********************************************************
  return (
    <div className="login-box">
      <h2>Generate Invoice PDF</h2>
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
        <a href="#">
          <span />
          <span />
          <span />
          <span />
          Generate Invoice
        </a>
      </form>
    </div>
  );
}

export default Invoice;
