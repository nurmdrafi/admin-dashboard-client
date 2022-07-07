import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";
import avatar from "../../assets/images/avatar.jpg"
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="editButton">Edit</div>
              <img
                src={avatar}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">Jane Doe</h2>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+0123456789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Dhaka</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={5 / 1} title="User Spending (Last 6 Months)" />{" "}
            {/* width / height */}
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
