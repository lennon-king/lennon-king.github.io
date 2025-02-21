import '../App.css';
import '../style.css';
import { useEffect } from "react";

import Footer from "../Footer.js"
import Body from "../Body.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js'
import ContactMe from '../ContactMe.js'

function Contact() {
    useEffect(() => {
        {document.body.style.overflow = 'auto'};
    }, []);

    return (
        <div>
            <Navbar />
            <div className="contact-page-top-bar"></div>;
            <div className="navbar-top-bar"></div>
            <Body />
            <ContactMe />
            <Footer />
            <Background />
        </div>
    );
}

export default Contact;
