import React, { useState } from "react";
import Layout from "../Layout/Layout";
import style from "../assets/css/users.module.css";
import data from "../utils/Userdata";
function Loan() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Layout>
      <input
        type="search"
        id="input"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Loan Takers"
      ></input>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.Name.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <tr>
                  <td scope="row">{item.Name}</td>
                  <td>{item.Email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
}

export default Loan;
