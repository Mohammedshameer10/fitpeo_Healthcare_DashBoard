import React from "react";
import "../Styles/AnatomySection.css";

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="body-illustration">
        <img
          src="/human-image.png"
          alt="Human Body"
          className="human-body-img"
        />
        <div className="indicator heart">Healthy Heart</div>
        <div className="indicator leg">Healthy Leg</div>
      </div>
      <div className="health-status">
        <div className="status-card lungs">
          <span className="status-icon lungs">🫁</span>
          <div className="status-details">
            <p>Lungs</p>
            <p>Healthy</p>
            <div className="status-bar"></div>
            <p>Date: 26 Oct 2021</p>
          </div>
        </div>
        <div className="status-card teeth">
          <span className="status-icon teeth">🦷</span>
          <div className="status-details">
            <p>Teeth</p>
            <p>Healthy</p>
            <div className="status-bar"></div>
            <p>Date: 26 Oct 2021</p>
          </div>
        </div>
        <div className="status-card bone">
          <span className="status-icon bone">🦴</span>
          <div className="status-details">
            <p>Bone</p>
            <p>Healthy</p>
            <div className="status-bar"></div>
            <p>Date: 26 Oct 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;