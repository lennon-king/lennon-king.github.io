
import React from 'react';
import ProjectCard from './ProjectCard';
import SHPEScreens from './SHPE_screens.png';
import SHPEWebsiteOld from './SHPE_website_old.png';
import LoanShark from './LoanShark.png';
import lennon_king from "./lennon.king.png"

const App = () => {
    const project = {
        title: "SHPE UF Official App",
        description: "Lead of a designing team for the newly-released SHPE UF app for IOS and Android devices.",
        image: SHPEScreens,
        link: "SHPE-UF-Offical-App",
        techStack: ["React", "Redux", "Node.js", "Stripe"]
        };

    const project2 = {
        title: "SHPE UF Website Redesign",
        description: "Lead of the redesign initiative of the SHPE UF website.",
        image: SHPEWebsiteOld,
        link: "Redesigned-SHPE-UF-Website",
        techStack: ["React", "Redux", "Node.js", "Stripe"]
        };

    const project3 = {
        title: "LoanShark Car Rental",
        description: "A full-stack web application that micmicks a car rental service.",
        image: LoanShark,
        link: "https://example.com",
        techStack: ["React", "Redux", "Node.js", "Stripe"]
        };

    const project4 = {
        title: "E-commerce Website",
        description: "A fully functional e-commerce platform with secure payment integration.",
        image: lennon_king,
        link: "https://github.com/ecommerce-website",
        techStack: ["React", "Redux", "Node.js", "Stripe"]
        };

        return (
            <>
            
            {/* Navbar Section */}
            <div className="project-card-background"> 
                Featured Projects 
            </div>

            <div className="project-card-sub-text"> 
                More Coming Soon! 
            </div>

            <div className="app-container">
                <ProjectCard 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                link={project.link} 
            />
                <ProjectCard
                title={project2.title}
                description={project2.description}
                image={project2.image}
                link={project2.link}
                techStack={project2.techStack}
            />
            </div>
        </>
        );
};

export default App;
