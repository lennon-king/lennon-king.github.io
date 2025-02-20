import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="intro-background">
            <header>
                <div className="intro-text">
                    Hello, I'm Lennon: a student making memorable user experiences.
                </div>
                <div className="about-me-text">
                    Lead UI/UX Designer for SHPE UF and a student at the University of Florida studying Computer Science
                    with a minor in Digital Arts and Sciences.
                </div>
                <button className="contact-me-button" onClick={() => navigate("/contact")}>
                    Contact Me
                </button>
            </header>
        </div>
    );
}

export default Header;
