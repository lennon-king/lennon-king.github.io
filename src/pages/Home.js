import '../App.css';
import '../style.css';
import { useEffect } from "react";

import Header from "../Header.js"
import Footer from "../Footer.js"
import Body from "../Body.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js';
import Contact from '../ContactMe.js';

function Home() {
    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, []);

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
