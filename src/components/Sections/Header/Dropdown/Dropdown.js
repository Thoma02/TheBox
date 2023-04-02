import React from 'react';
import "./Dropdown.css";
import { KeyGenerator } from '../../../../Utils/KeyGenerator';

export default function Dropdown({ display }) {

  const options = [
    { label: "Home", href: "#header"},
    { label: "About Us", href: "#about-us"},
    { label: "Projects", href: "#projects"},
    { label: "Services", href: "#services"},
    { label: "Contact Us", href: "#contact-us"},
  ];

  const toggleSlide = () => display ? "slide-in" : "slide-out";

  return (
    <div className={`dropdown ${toggleSlide()}`}>
      {options.map((option) => (
          <div className="dropdown-option" key={KeyGenerator()}>
            <a href={option.href}>{option.label}</a>
          </div>
        ))}
    </div>
  );
}