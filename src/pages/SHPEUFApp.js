import logo from '../logo.svg';
import '../App.css';
import '../style.css';

import Header from "../Header.js"
import ContactMe from "../ContactMe.js"
import Footer from "../Footer.js"
import Body from "../Body.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js';
import ProjectText from "../SHPEAppProjectText.js"
import Contact from '../ContactMe.js';
import SHPEUFOfficialAppPage from '../SHPEUFOfficialAppPage.js';
import mockup_1 from "../SHPE_app_mockup_1.jpeg"
import SHPEUFAppHeader from "../SHPEUFAppHeader.js";

document.body.style.overflow = 'auto';

function Home() {
    return (
        <div>
            <Navbar />
            <SHPEUFAppHeader />
            <ProjectText />
            <Body />
            <Footer />
            <Background />
        </div>
    );
}

export default Home;
