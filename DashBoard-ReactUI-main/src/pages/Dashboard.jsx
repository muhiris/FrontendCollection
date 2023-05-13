import React from "react";
import style from "../assets/css/dashboard.module.css";
import Layout from "../Layout/Layout";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../utils/Chartdata";
import { BarChart } from "../component/BarChart";
import LineChart from "../component/LineChart";
import { saleData } from "../utils/Saledata";
Chart.register(CategoryScale);

function Dashboard() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <Layout>
      <article>
        <section>
          <header>Total Sales</header>
          <div className={style.inlineChart}>
            <div className={style.info}>
              <div className={style.value}>$36,146</div>
              <div className={style.title}>Credit sales</div>
            </div>
          </div>
          <div className={style.inlineChart}>
            <div className={style.info}>
              <div className={style.value}>$24,734</div>
              <div className={style.title}>Channel Sales</div>
            </div>
          </div>
          <div className={style.inlineChart}>
            <div className={style.info}>
              <div className={style.value}>$15,650</div>
              <div className={style.title}>Direct Sales</div>
            </div>
          </div>
        </section>

        <section>
          <div className={style.chart}>
            {/* <PieChart chartData={chartData} /> */}
            <BarChart chartData={chartData} />
            <LineChart chartData={chartData} />
          </div>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>November Sales</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {saleData.map((item) => {
                return (
                  <tr>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>{item.sale}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  );
}

export default Dashboard;
