import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-background">
            <nav className="navbar-nav">
                <Link to="/" className="navbar-handle">lennon.king</Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li>
                        <a href="/Lennon_King_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
