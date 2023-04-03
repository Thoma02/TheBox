import React from "react";
import { KeyGenerator } from "../../../Utils/KeyGenerator";
import "./OurReputation.css";

export default function OurReputation() {

    const boxes = [
        { label: 'Best Services', info: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.', url: 'headphones'},
        { label: 'Best Teams', info: 'Cursus semper tellus volutpat aliquet lacus.', url: 'headphones'},
        { label: 'Best Designs', info: 'Ultricies at ipsum nunc, tristique nam lectus.', url: 'rulerAndPecil'}
    ];

    {boxes.map((box) => (
        <div className="best-boxes">
            <img src={`./Assets/Sections/OurReputation/${box.url}.svg`} alt={box.url}/>
            <h3>{box.label}</h3>
            <p>{box.info}</p>
        </div>
    ))}

    return (
        <div id="our-reputation">
            <h1>Our Reputation</h1>
            <div id="box-container">
                {boxes.map((box) => (
                    <div className="best-boxes" key={KeyGenerator()}>
                        <img src={`./Assets/Sections/OurReputation/${box.url}.svg`} alt={box.url}/>
                        <h3>{box.label}</h3>
                        <p>{box.info}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}