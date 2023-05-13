import React from "react";
import Layout from "../Layout/Layout";
import style from "../assets/css/product.module.css";
import burger from "../assets/burger.png";
import { Link } from "react-router-dom";
function Product() {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.product_image}>
          <img src={burger} className={style.product_pic} />
        </div>
        <div className={style.product_details}>
          <header>
            <h1 className={style.title}>Burger</h1>
            <span className={style.colorCat}>SCMS Cafe</span>
            <div className={style.price}>
              <span className={style.current}>Rs 1440</span>
            </div>
          </header>
          <article>
            <h5 style={{ color: "black" }}>Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>

          <div className={style.footer}>
            <button type="button">
              <i className="fa fa-2xl fa-credit-card" />
              <Link to={"/update-product"}>Update</Link>
            </button>
            <button type="button">
              <i className="fa fa-2xl fa-credit-card" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
