import React, { useState } from "react";
import "./Header.css";
import { KeyGenerator } from "../../../Utils/KeyGenerator";
import Dropdown from "./Dropdown/Dropdown";

export default function Header() {

    const [display, setDisplay] = useState(false);

    function handleClick() {
      if(!display) {
          setDisplay(true);
      } else {
          setDisplay(false);
      }
    }

    const links = [
        { label: "Home", href: "#nav-links"},
        { label: "About Us", href: "#about-us"},
        { label: "Projects", href: "#projects"},
        { label: "Services", href: "#services"},
        { label: "Contact Us", href: "#contact-us"},
    ]

    return (
        <div id="header">
            <div id="logo-container">
                <img src="./Assets/Sections/Header/logo.svg" alt=""/>
                <span><i>The</i>Box</span>
            </div>
            <div id="nav-links">
                {links.map((link) => (
                    <a href={link.href} key={KeyGenerator()}>{link.label}</a>
                ))}
            </div>
            <img onClick={() => handleClick()} id="burger" src="./Assets/Sections/Header/burger.svg" alt="Search"/>
            <Dropdown display={display}/>
        </div>
    )
}