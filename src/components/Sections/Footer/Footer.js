import React from "react";
import "./Footer.css";

export default function Footer() {

    return (
        <div id="footer">
            <div id="contact-us">
                <div id="contact-info">
                    <div id="contact-label">
                        <p>Address: </p>
                        <p>Phone: </p>
                        <p>Email: </p>
                    </div>
                    <div id="contact-value">
                        <p>6391 Elgin St. Celina, Delaware 10299</p>
                        <p>+84 1102 2703</p>
                        <p>hello@thebox.com</p>
                    </div>   
                </div>
                <div id="logo-container-footer">
                    <img src="./Assets/Sections/Header/logo.svg" alt=""/>
                    <span><i>The</i>Box</span>
                </div>
            </div>
            <div id="newsletter">
                <div id="newsletter-sign-up">
                    <p>Newsletter:</p>
                    <div id="subscribe">
                        <input type="email" placeholder="Your email here"/>
                        <input type="submit" value="Subscribe"/>
                    </div>
                </div>
                <div id="social">
                    <p>Social:</p>
                    <div id="medias">
                        <img src="./Assets/Sections/Footer/facebook.svg" alt=""/>
                        <img src="./Assets/Sections/Footer/linkedin.svg" alt=""/>
                        <img src="./Assets/Sections/Footer/twitter.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}