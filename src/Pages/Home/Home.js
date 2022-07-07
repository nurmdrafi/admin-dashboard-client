import React from "react";
import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import Widget from "../../Components/Widget/Widget";
import "./Home.scss";

/* 
Each page includes <Sidebar /> and <Navbar />
Each .container includes subContainer like: .top, .bottom, .left, .right
*/
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* 
          Similar in look different in data,
          here, 4 types Widget components exists.
          Inside Widget component set data object by using switch method based on type.
          */}
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" /> {/* width / height */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
