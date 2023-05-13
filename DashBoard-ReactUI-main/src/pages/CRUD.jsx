import React from "react";
import style from "../assets/css/crud.module.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
function CRUD() {
  let card = [
    "showCard",
    "showCard",
    "showCard",
    "showCard",
    "showCard",
    "showCard",
    "showCard",
    "showCard",
  ];
  return (
    <Layout>
      <div className={style.flex_crud}>
        <h2 style={{ textAlign: "center", padding: "20px" }}>
          UPDATE AND DELETE
        </h2>
        <button>Add Product</button>
      </div>
      <div className={style.container}>
        {/*  */}
        {/* Product */}
        {/*  */}
        {card.map((item) => {
          return (
            <Link to={"/product"} className={style.card}>
              <img
                className={style.img}
                src="https://images.unsplash.com/photo-1536323760109-ca8c07450053"
                alt="Lago di Braies"
              />
              <div className={style.card__details}>
                <div className={style.name}>Lago di Braies</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur sodales morbi dignissim sed diam pharetra vitae
                  ipsum odio.
                </p>
              </div>
            </Link>
          );
        })}

        {/*  */}
        {/* Product */}
        {/*  */}
      </div>
    </Layout>
  );
}

export default CRUD;
