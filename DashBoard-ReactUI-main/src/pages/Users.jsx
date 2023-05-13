import React, { useState } from "react";
import Layout from "../Layout/Layout.jsx";
import style from "../assets/css/users.module.css";
import data from "../utils/Userdata.js";
function Users() {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <input
        type="search"
        id="input"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Users"
      ></input>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
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
                  <td>{item.Created}</td>
                  <td>{item.Status}</td>
                  <td>{item.Email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
}

export default Users;
