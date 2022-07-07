import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import {
  MdLanguage,
  MdOutlineDarkMode,
  MdList,
  MdNotificationsNone,
  MdFullscreenExit,
} from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import avatar from "../../assets/images/avatar.jpg";
import "./Navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <MdOutlineDarkMode
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <MdFullscreenExit className="icon" />
          </div>
          <div className="item">
            <MdNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FiMessageSquare className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <MdList className="icon" />
          </div>
          <div className="item">
            <img src={avatar} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
