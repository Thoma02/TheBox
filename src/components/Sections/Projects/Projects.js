import React, {useState} from "react";
import Slider from "./Slider/Slider";
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
                <Slider />
            </div>
        </div>
    )
}