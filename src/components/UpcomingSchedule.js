import React from "react";
import "../Styles/UpcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="event">
          <span className="event-icon">💉</span>
          <span>Health checkup complete</span>
          <span className="time">11:00 AM</span>
        </div>
        <div className="event">
          <span className="event-icon">👁️</span>
          <span>Ophthalmologist</span>
          <span className="time">14:00 PM</span>
        </div>
      </div>
      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="event">
          <span className="event-icon">❤️</span>
          <span>Cardiologist</span>
          <span className="time">12:00 AM</span>
        </div>
        <div className="event">
          <span className="event-icon">🧠</span>
          <span>Neurologist</span>
          <span className="time">16:00 PM</span>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;