
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';
import SHPEUFOfficalApp from './pages/SHPEUFApp.js';
import RedesignedWebsite from './pages/RedesignedWebsite.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/#/" element={<Home />} />
        <Route path="/#/contact" element={<Contact />} />
        <Route path="/#/projects" element={<Projects />} />
        <Route path="/#/SHPE-UF-Offical-App" element={<SHPEUFOfficalApp />} />
        <Route path="/#/Redesigned-SHPE-UF-Website" element={<RedesignedWebsite />} />
      </Routes>
    </Router>
  );
}


export default App;
