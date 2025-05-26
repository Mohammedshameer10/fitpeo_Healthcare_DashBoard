import React from "react";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import "../Styles/DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <div className="dashboard-main">
      <h2>DASHBOARD</h2>
      <div className="dashboard-layout">
        <AnatomySection />
        <div className="right-side">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

export default DashboardMainContent;
