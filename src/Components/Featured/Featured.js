import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <FiMoreVertical className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="items">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <IoIosArrowDown className="icon" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <IoIosArrowUp className="icon" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <IoIosArrowUp className="icon" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
