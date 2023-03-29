import React  from "react";
import "./OurMission.css"

export default function OurMission() {

    return (
        <div id="our-mission">
            <h1>Building things is our mission.</h1>
            <div id="feature-projects">
                <h3>Feature Projects</h3>
                <p id="project-name">The National University of Architecture</p>
                <div id="buttons-container">
                    <div className="projects-buttons">
                        <img src="./Assets/Sections/OurMission/white-arrow-left.svg" alt=""/>
                        <p>Back</p>
                    </div>
                    <div className="white-divider"></div>
                    <div className="projects-buttons">
                        <p>Next</p>
                        <img src="./Assets/Sections/OurMission/white-arrow-right.svg" alt=""/>
                    </div>
                </div>
            </div> 
        </div>
    )
}