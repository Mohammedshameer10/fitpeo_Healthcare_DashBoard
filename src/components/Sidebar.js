import React from "react";
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaUserMd, FaChartBar, FaVial, FaComments, FaHeadset, FaCog } from "react-icons/fa";
import "../Styles/Sidebar.css";

const navLinks = [
  { icon: <FaTachometerAlt />, label: "Dashboard" },
  { icon: <FaHistory />, label: "History" },
  { icon: <FaCalendarAlt />, label: "Calendar" },
  { icon: <FaUserMd />, label: "Appointments" },
  { icon: <FaChartBar />, label: "Statistics" },
  { icon: <FaVial />, label: "Tests" },
  { icon: <FaComments />, label: "Chat" },
  { icon: <FaHeadset />, label: "Support" },
  { icon: <FaCog />, label: "Setting" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Health<span>care.</span></h2>
      <div className="sidebar-section">General</div>
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li key={index}>
            {link.icon}
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
