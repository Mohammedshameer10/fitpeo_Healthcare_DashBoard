import React from "react";
import { FaBell, FaPlus } from "react-icons/fa";
import "../Styles/AppHeader.css";

function AppHeader() {
  return (
    <div className="app-header">
      <input className="search-bar" type="text" placeholder="Search" />
      <FaBell className="icon" />
      <div className="user-profile">
        <img src="https://i.pravatar.cc/40" alt="user" />
        <FaPlus className="add-button" />
      </div>
    </div>
  );
}

export default AppHeader;