import React from "react";

function Header() {
    return (
        <>
            <div className="intro-background">
                {/* Main Header Content (Intro & About Me) */}
                <header>
                    <div className="intro-text">
                        The Forget-Me Project
                    </div>
                    <div className="about-me-text">
                        Ethical Amnesia for the Digital Age
                    </div>{/*
                    /*<button className="contact-me-button" onClick={() => window.location.href = "contact"}>
                    /*    Keep Up to Date!
                    /*</button>*/}
                </header>
            </div>
        </>
    );
}

export default Header;
