import React from "react";
import "./OurReputation.css";

export default function OurReputation() {

    return (
        <div id="our-reputation">
            <h1>Our Reputation</h1>
            <div id="box-container">
                <div className="best-boxes">
                    <img src="./Assets/Sections/OurReputation/headphones.svg" alt=""/>
                    <h3>Best Services</h3>
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </div>
                <div className="best-boxes">
                    <img src="./Assets/Sections/OurReputation/headphones.svg" alt=""/>
                    <h3>Best Teams</h3>
                    <p>Cursus semper tellus volutpat aliquet lacus. </p>
                </div>
                <div className="best-boxes">
                    <img src="./Assets/Sections/OurReputation/rulerAndPecil.svg" alt=""/>
                    <h3>Best Designs</h3>
                    <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
                </div>
            </div>
        </div>
    )
}