import React from "react";
import { KeyGenerator } from "../../../Utils/KeyGenerator";
import "./Services.css"

export default function Services() {

  const services = [
    {label: 'Construction', color: 'white-box', url: 'construction'},
    {label: 'Renovation', color: 'blue-box', url: 'renovation'},
    {label: 'Consultation', color: 'white-box', url: 'consultation'},
    {label: 'Repair Services', color: 'blue-box', url: 'repair'},
    {label: 'Architecture', color: 'white-box', url: 'architecture'},
    {label: 'Electric', color: 'blue-box', url: 'electric'}
  ];

    return (
        <div id="services">
        <h1>Services</h1>
        <div id="services-container">
          {services.map((service) => (
            <div className={`services-boxes ${service.color}`} key={KeyGenerator()}>
                <img src={`./Assets/Sections/Services/${service.url}.svg`} alt=""/>
                <div className="grey-line"></div>
                <p>{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    )
}