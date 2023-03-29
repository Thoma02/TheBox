import React from "react";
import "./Projects.css";

export default function Projects() {

    return (
        <div id="projects">
            <h1>Projects</h1>
            <div id="projects-container">
                <div id="sidebar">
                    <p>All</p>
                    <p>Commercial</p>
                    <p>Residential</p>
                    <p>Other</p>
                </div>
                <div id="projects-slider">
                    <div id="projects-boxes-container">
                        <div className="project-boxes">
                        <img src="./Assets/Sections/Projects/hotel.svg" alt=""/>
                        <div className="project-info">
                            <h3>Wildstone Infra Hotel</h3>
                            <p>2715 Ash Dr. San Jose, South Dakota</p>
                        </div>
                        </div>
                        <div className="project-boxes">
                            <img src="./Assets/Sections/Projects/building.svg" alt=""/>
                            <div className="project-info">
                                <h3>Wish Stone Building</h3>
                                <p>2972 Westheimer Rd. Santa Ana, Illinois </p>
                            </div>
                        </div>
                        <div className="project-boxes">
                            <img src="./Assets/Sections/Projects/house.svg" alt=""/>
                            <div className="project-info">
                                <h3>Mr. Parkinston’s House</h3>
                                <p>3517 W. Gray St. Utica, Pennsylvania</p>
                            </div>
                        </div>
                        <div className="project-boxes">
                            <img src="./Assets/Sections/Projects/height.svg" alt=""/>
                            <div className="project-info">
                                <h3>Oregano Height</h3>
                                <p>2464 Royal Ln. Mesa, New Jersey </p>
                            </div>
                        </div>
                    </div>
                    <div id="project-buttons-container">
                        <div className="projects-buttons2">
                            <img src="./Assets/Sections/OurMission/white-arrow-left.svg" alt=""/>
                            <p>Back</p>
                        </div>
                        <div id="project-selectors">
                            <div className="circle-selector"></div>
                            <div className="circle-selector"></div>
                            <div className="circle-selector"></div>
                            <div className="circle-selector"></div>
                            <div className="circle-selector"></div> 
                        </div>
                        <div className="projects-buttons2">
                            <p>Next</p>
                            <img src="./Assets/Sections/OurMission/white-arrow-right.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}