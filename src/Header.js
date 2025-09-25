import React from "react";

function Header() {
    return (
        <>
            <div className="intro-background">
                {/* Main Header Content (Intro & About Me) */}
                <header>
                    <div className="intro-text">
                        Hello! I'm Lennon: a student making memorable experiences.
                    </div>
                    <div className="about-me-text">
                        Civil Engineering Student at University of Florida | Minor in Computer Science
                    </div>
                    <button className="contact-me-button" onClick={() => window.location.href = "contact"}>
                        Contact Me
                    </button>
                </header>
            </div>
        </>
    );
}

export default Header;
