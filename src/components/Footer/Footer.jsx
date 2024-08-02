import React from "react";
import Services from "../Services/Services";
import About from "../About/About";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <Services />
            <About />
        </div>
    );
}

export default Footer;
