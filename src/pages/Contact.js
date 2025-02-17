import '../App.css';
import '../style.css';

import Footer from "../Footer.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js'
import ContactMe from '../ContactMe.js'

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="contact-page-top-bar"></div>;
            <div className="navbar-top-bar"></div>
            <ContactMe />
            <Footer />
            <Background />
            {document.body.style.overflow = 'hidden'}
        </div>
    );
}


export default Contact;
