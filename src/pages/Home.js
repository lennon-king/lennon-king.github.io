import logo from '../logo.svg';
import '../App.css';
import '../style.css';

import Header from "../Header.js"
import ContactMe from "../ContactMe.js"
import Footer from "../Footer.js"
import Body from "../Body.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js';
import Contact from '../ContactMe.js';

document.body.style.overflow = 'auto';

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <Contact />
            <Footer />
            <Background />
        </div>
    );
}


export default Home;
