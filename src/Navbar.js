import React from "react";

function Navbar() {
    return (
        <>
            {/* Navbar Section */}
            <div className="navbar-background">
                <nav className="navbar-nav">
                    <a href="/" className="navbar-handle">lennon.king</a>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="projects">Projects</a></li>
                        <li><a href="/Lennon_King_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
