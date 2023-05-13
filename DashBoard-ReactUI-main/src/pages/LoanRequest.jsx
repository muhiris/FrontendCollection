import React from "react";
import Layout from "../Layout/Layout";
import style from "../assets/css/loanrequest.module.css";
import data from "../utils/Userdata";
import "../assets/css/loanrequest.module.css";
import { Link } from "react-router-dom";
function LoanRequest() {
  return (
    <Layout>
      <table>
        <caption>Loan Requests</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td scope="row">{item.Name}</td>
                <td>{item.Email}</td>
                <button className={style.btn_cancel}>Cancel</button>
                <button className={style.btn_ok}>
                  <Link to={"/loan"}>Accept</Link>
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}

export default LoanRequest;
