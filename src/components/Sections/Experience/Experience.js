import React from "react";
import "./Experience.css";

export default function Experience() {

    return (
        <div id="experience">
            <div id="stats">
                <div className="stats-boxes">
                <img id="clients" src="./Assets/Sections/Experience/clients.svg" alt=""/>
                <h2>84</h2>
                <div className="stats-text">
                    <div className="orange-line"></div>
                    <p>Happy Clients</p>
                </div>
                </div>
                <div className="stats-boxes">
                <img id="completed" src="./Assets/Sections/Experience/completed.svg" alt=""/>
                <h2>123</h2>
                <div className="stats-text">
                    <div className="orange-line"></div>
                    <p>Projects Completed</p>
                </div>
                </div>
                <div className="stats-boxes">
                <img id="win" src="./Assets/Sections/Experience/win.svg" alt=""/>
                <h2>37</h2>
                <div className="stats-text">
                    <div className="orange-line"></div>
                    <p>Awards Win</p>
                </div>
                </div>
                <div className="stats-boxes">
                <img id="business" src="./Assets/Sections/Experience/bussiness.svg" alt=""/>
                <h2>30</h2>
                <div className="stats-text">
                    <div className="orange-line"></div>
                    <p>Years in Business</p>
                </div>
                </div>
            </div>
            <div id="info">
                <h1>30 Years Experience</h1>
                <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                <button>Contact Us</button>
            </div>
        </div>
    )
}