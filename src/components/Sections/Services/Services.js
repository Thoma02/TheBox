import React from "react";
import "./Services.css"

export default function Services() {

    return (
        <div id="services">
        <h1>Services</h1>
        <div id="services-container">
          <div className="services-boxes white-box">
            <img src="./Assets/Sections/Services/construction.svg" alt=""/>
            <div className="grey-line"></div>
            <p>Construction</p>
          </div>
          <div className="services-boxes blue-box">
            <img src="./Assets/Sections/Services/renovation.svg" alt=""/>
            <div className="grey-line"></div>
            <p>Renovation</p>
          </div>
          <div className="services-boxes white-box">
            <img src="./Assets/Sections/Services/consultation.svg" alt=""/>
            <div className="grey-line"></div>
            <p>Consultation</p>
          </div>
          <div className="services-boxes blue-box">
            <img src="./Assets/Sections/Services/repair.svg" alt=""/>
            <div className="grey-line"></div>
            <p>Repair Services</p>
          </div>
          <div className="services-boxes white-box">
            <img src="./Assets/Sections/Services/architecture.svg" alt=""/>
            <div className="grey-line"></div>
            <p>Architecture</p>
          </div>
          <div className="services-boxes blue-box">
            <img src="./Assets/Sections/Services/electric.svg" alt=""/>
            <div className="grey-line"></div>
            <p>Electric</p>
          </div>
        </div>
      </div>
    )
}