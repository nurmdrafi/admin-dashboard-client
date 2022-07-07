import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineProductionQuantityLimits,
  MdOutlineSettingsSystemDaydream,
  MdOutlineLogout,
  MdNotificationsNone,
} from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";

import { TbTruckDelivery } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiOutlineIdcard, AiFillDatabase } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { FiSettings } from "react-icons/fi";

import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <MdOutlineDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <HiOutlineUsers className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineProductionQuantityLimits className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <AiOutlineIdcard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <TbTruckDelivery className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <ImStatsBars className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <MdNotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MdOutlineSettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <AiFillDatabase className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <FiSettings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <CgProfile className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <MdOutlineLogout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
