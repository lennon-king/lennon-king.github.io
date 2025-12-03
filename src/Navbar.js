import React from "react";

function Navbar() {
    return (
        <>
            {/* Navbar Section */}
            <div className="navbar-background">
                <nav className="navbar-nav">
                    <a href="/" className="navbar-handle">The Forget-Me Project</a>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="#/about">About Us</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
