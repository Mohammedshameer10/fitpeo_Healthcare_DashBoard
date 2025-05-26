import React from "react";
import "../Styles/CalendarView.css";

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-header">
        <div className="calendar-days">
          <div className="day">Mon 25</div>
          <div className="day">Tue 26</div>
          <div className="day">Wed 27</div>
          <div className="day">Thu 28</div>
          <div className="day">Fri 29</div>
          <div className="day">Sat 30</div>
          <div className="day">Sun 31</div>
        </div>
      </div>
      <div className="calendar-body">
        <div className="time-slots">
          <div className="time">08:00</div>
          <div className="time">09:00</div>
          <div className="time">10:00</div>
          <div className="time">11:00</div>
          <div className="time">12:00</div>
          <div className="time">14:00</div>
          <div className="time">16:00</div>
        </div>
        <div className="schedule-grid">
          {Array(7).fill().map((_, dayIndex) =>
            Array(7).fill().map((_, timeIndex) => (
              <div key={`${dayIndex}-${timeIndex}`} className="grid-cell"></div>
            ))
          )}
          <div className="appointment-card" style={{ gridColumn: 5, gridRow: 2 }}>
            09:00
          </div>
          <div className="appointment-card" style={{ gridColumn: 5, gridRow: 4 }}>
            11:00
          </div>
          <div className="appointment-card" style={{ gridColumn: 6, gridRow: 5 }}>
            12:00
          </div>
          <div className="appointment-card" style={{ gridColumn: 6, gridRow: 7 }}>
            16:00
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
