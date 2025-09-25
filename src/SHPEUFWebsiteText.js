import React from 'react';
import ProjectCard from './ProjectCard';
import SHPEScreens from './SHPE_screens.png';
import SHPEWebsiteOld from './SHPE_website_old.png';
import LoanShark from './LoanShark.png';
import lennon_king from "./lennon.king.png"
import mockup_1 from "./SHPE_app_mockup_1.jpeg"
import mockup_2 from "./Register_Prototype.png"
import mockup_3 from "./Register_Finished.png"
import mockup_4 from "./Notification_Screen.png"
import mockup_5 from "./Points_Page.png"
import mockup_6 from "./original_website.png"
import mockup_7 from "./web_proto.png"
import mockup_8 from "./web_refined.png"
import mockup_9 from "./web_finished.png"


const App = () => {
    return (
        <>
        <div className="text-container">
            <img className="SHPE_App_Mockup_1" src={SHPEWebsiteOld} alt={""}/>

            <div className="project-header-text"> 
                SHPE UF WEBSITE 
            </div>

            <div className="project-sub-header-text"> 
                Building New Foundations
            </div>

            <div className="project-body-text">
                An organization's website is often the first point of contact we have with new talent, members, and potential sponsors.
                For that reason, it is imperitive that the first impression is a great impression.
            </div>

            <div className="project-body-text">
                For this project, I redesigned the SHPE UF
                webpage for better user flow, accesibility, and navigatability.
            </div>

            <div className="project-sub-header-text"> 
                Starting with What We Have
            </div>

            <div className="project-body-text">
                Lets take a moment to disect some of the critical issues of the original webpage.
            </div>

            <img className="SHPE_App_Mockup_2" src={mockup_6} alt={""}/>

            <ul className="project-body-text">
                <li>Issue 1: Underutilized space, especially around text, hurts readability</li>
                <li>Issue 2: Lack of responsive design for different devices</li>
                <li>Issue 3: Inconsistent typography, sizing, and spacing</li>
                <li>Issue 4: Ambiguous icons can be confused for interactable objects</li>
                <li>Issue 5: Inconsistent and overwhelming color use</li>
            </ul>

            <div className="project-sub-header-text"> 
                What We Can Do
            </div>

            <div className="project-body-text">
                The webpage feels cramped. Even though the original page has ample open space, it isn’t 
                utilized in a way that improves readability. In a word, the original 
                page lacks flow. The information is clearly blocked into regions, but 
                these regions are hard to visually digest.
            </div>

            <div className="project-body-text">
                Let’s see how we can clean the page’s flow, while trying out 
                a more interesting style at the same time.
            </div>

            <div className="project-body-text">
                Here we have the initial wireframe.
            </div>

            <img className="SHPE_App_Mockup_1" src={mockup_7} alt={""}/>

            <div className="project-sub-header-text"> 
                Conceptual Refinement
            </div>

            <div className="project-body-text">
                Initial viewer testing yielded positive results to the change of direction. 
                For the prototype, I expanded the direction to include more space for photos 
                and information, creating a design that can be edited and adjusted to fit 
                multiple site pages.
            </div>

            <div className="project-body-text">
                At this point, I also considered the connectedness of the wireframe. 
                Instead of trying to use two shape languages (smooth and sharp), I 
                decided to focus on one.
            </div>

            <div className="project-body-text">
                Here we have the initial prototype. There are still some improvements 
                to be made. Namely, when prototyped on a screen, the photos are disproportionately 
                large with the body of the page.
            </div>

            <div className="project-body-text">
                These changes yielded positive results, but there was still more to be improved.
            </div>

            <img className="SHPE_App_Mockup_2" src={mockup_8} alt={""}/>

            <div className="project-header-text"> 
                Final Design
            </div>

            <div className="project-body-text">
                In the final version, I addressed the raised concerns from the prototype. Additionally, 
                I decided that implementing different color schemes and textures would 
                create variety in the web pages to improve retention and interest.
            </div>  

            <img className="SHPE_App_Mockup_1" src={mockup_9} alt={""}/>
        </div>
    </>
    );
};

export default App;
