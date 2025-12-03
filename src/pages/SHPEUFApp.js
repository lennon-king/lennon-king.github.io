
import '../App.css';
import '../style.css';

import Footer from "../Footer.js"
import Navbar from "../Navbar.js"
import Background from '../Background.js';
import ProjectText from "../SHPEAppProjectText.js"
import WhyThisMatters from "../WhyThisMatters.js";

document.body.style.overflow = 'auto';

function Home() {
    return (
        <div>
            <Navbar />
            <WhyThisMatters />
            <ProjectText />
            <Footer />
            <Background />
        </div>
    );
}

export default Home;
