import React from "react";

function Header() {
    return (
        <>
            {/* Navbar Section */}
            <div className="navbar-background">
                <nav className="navbar-handle">
                    lennon.king
                </nav>
                <nav className="navbar-nav">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div className="intro-background">
                {/* Main Header Content (Intro & About Me) */}
                <header className="header-content">
                    <div className="intro-text">
                        Hello, I'm Lennon: looking to make the world a better experience.
                    </div>
                    <div className="about-me-text">
                        Lead UI/UX Designer for SHPE UF and a student at the University of Florida studying Computer Science
                        with a minor in Digital Arts and Sciences.
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;
