import React from "react";
import "./Header.css"
import { KeyGenerator } from "../../../Utils/KeyGenerator";

export default function Header() {

    const links = [
        { label: "Home", href: ""},
        { label: "About Us", href: ""},
        { label: "Projects", href: ""},
        { label: "Services", href: ""},
        { label: "Contact Us", href: ""},
    ]

    return (
        <div id="header">
            <div id="logo-container">
                <img src="./Assets/Sections/Header/logo.svg" alt=""/>
                <span>TheBox</span>
            </div>
            <div id="nav-links">
                {links.map((link, index) => (
                    <a href={link.href} key={KeyGenerator()}>{link.label}</a>
                ))}
            </div>
        </div>
    )
}