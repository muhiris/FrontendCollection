import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./sidebar.css";
import logo from "../assets/Vector.png";
function SideBar() {
  const [resp, setResp] = useState("wrapper");

  useEffect(() => {
    function handleResize() {
      var x = window.matchMedia("(max-width: 600px)");
      if (x.matches) {
        setResp("wrapper hover_collapse");
      } else {
        setResp("wrapper");
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.matchMedia("(max-width: 600px)")]);

  return (
    <div className={resp}>
      <div className="top_navbar">
        <img src={logo} alt="" />
        <div className="logo">SCMS</div>
      </div>

      <div className="sidebar">
        <div className="sidebar_inner">
          <ul>
            <li>
              <Link to="/">
                <span className="icon">
                  <i className="fa fa-qrcode" />
                </span>
                <span className="text">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/order">
                <span className="icon">
                  <i className="fa fa-folder" />
                </span>
                <span className="text">Make Order</span>
              </Link>
            </li>

            <li>
              <Link to="/crud">
                <span className="icon">
                  <i className="fa fa-plus" />
                </span>
                <span className="text">CRUD</span>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <span className="icon">
                  <i className="fa fa-print" />
                </span>
                <span className="text">Invoice</span>
              </Link>
            </li>

            <li>
              <Link to="/loan">
                <span className="icon">
                  <i className="fa fa-credit-card" />
                </span>
                <span className="text">Loan</span>
              </Link>
            </li>

            <li>
              <Link to="/loanRequest">
                <span className="icon">
                  <i className="fa fa-rss " />
                </span>
                <span className="text">Requests</span>
              </Link>
            </li>

            <li>
              <Link to="/users">
                <span className="icon">
                  <i className="fa fa-eye" />
                </span>
                <span className="text">Users</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="icon">
                  <i className="fa fa-lock" />
                </span>
                <span className="text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
