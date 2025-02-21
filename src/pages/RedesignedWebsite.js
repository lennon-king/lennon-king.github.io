import '../App.css';
import '../style.css';
import { useEffect } from "react";

import Footer from "../Footer.js"
import Body from "../Body.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js';
import ProjectText from "../SHPEUFWebsiteText.js"
import SHPEUFWebsiteHeader from '../SHPEUFWebsiteHeader.js';

document.body.style.overflow = 'auto';

function Home() {
    useEffect(() => {
        {document.body.style.overflow = 'auto'};
    }, []);

    return (
        <div>
            <Navbar />
            <SHPEUFWebsiteHeader />
            <ProjectText />
            <Body />
            <Footer />
            <Background />
        </div>
    );
}

export default Home;
