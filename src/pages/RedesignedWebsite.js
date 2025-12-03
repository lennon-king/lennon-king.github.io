import logo from '../logo.svg';
import '../App.css';
import '../style.css';

import Footer from "../Footer.js"
import Body from "../Body.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js';
import ProjectText from "../SHPEUFWebsiteText.js"
import SHPEUFWebsiteHeader from '../SHPEUFWebsiteHeader.js';

document.body.style.overflow = 'auto';

function Home() {
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
