import React from "react";
import { BsSearch } from "react-icons/bs";
import {
  MdLanguage,
  MdOutlineDarkMode,
  MdList,
  MdNotificationsNone,
  MdFullscreenExit,
} from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className="icon"/>
            <span>English</span>
          </div>
          <div className="item">
            <MdOutlineDarkMode className="icon"/>
          </div>
          <div className="item"></div>
          <div className="item">
            <MdFullscreenExit className="icon"/>
          </div>
          <div className="item">
            <MdNotificationsNone className="icon"/>
          </div>
          <div className="item">
            <FiMessageSquare className="icon"/>
          </div>
          <div className="item">
            <MdList className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
