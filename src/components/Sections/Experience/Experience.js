import React from "react";
import { KeyGenerator } from "../../../Utils/KeyGenerator";
import "./Experience.css";

export default function Experience() {

    const notes = [
        {id: 'clients', url: './Assets/Sections/Experience/clients.svg', number: 84, label: 'Happy Clients'},
        {id: 'completed', url: './Assets/Sections/Experience/completed.svg', number: 123, label: 'Projects Completed'},
        {id: 'win', url: './Assets/Sections/Experience/win.svg', number: 37, label: 'Awards Won'},
        {id: 'business', url: './Assets/Sections/Experience/bussiness.svg', number: 30, label: 'Years in Business'},
    ]

    return (
        <div id="experience">
            <div id="stats">
                {notes.map((note) => (
                    <div className="stats-boxes" key={KeyGenerator()}>
                        <img id={note.id} src={note.url} alt={note.label}/>
                        <h2>{note.number}</h2>
                        <div className="stats-text">
                            <div className="orange-line"></div>
                            <p>{note.label}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div id="info">
                <h1>30 Years Experience</h1>
                <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                <button>Contact Us</button>
            </div>
        </div>
    )
}