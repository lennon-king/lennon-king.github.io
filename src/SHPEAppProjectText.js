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
import mockup_6 from "./SHPE-appstore.png"

const App = () => {
    return (
        <>
        <div className="text-container">
            <img className="SHPE_App_Mockup_1" src={mockup_1} alt={""}/>

            <div className="project-header-text"> 
                SHPE UF APP 
            </div>

            <div className="project-sub-header-text"> 
                The Start of Something Great
            </div>

            <div className="project-body-text">
                The Society of Hispanic Professional Engineers at the University of Florida has a new app! Designed by our UI/UX
                team, this app connects our members through event tracking, reminders and notifications, and participation
                tracking. We are actively updating the app, providing new features and improvements.
            </div>

            <div className="project-body-text">
                The entire app is quite large, so this page will summarize some key features and points of development. For the
                full experience, give the app a try!
            </div>

            <div className="project-sub-header-text"> 
                Registration and Sign in Screens 
            </div>

            <div className="project-body-text">
                The registration and sign in page underwent two major points in development: the initial prototype
                (top) and the final version (bottom).
            </div>

            <img className="SHPE_App_Mockup_1" src={mockup_2} alt={""}/>

            <img className="SHPE_App_Mockup_1" src={mockup_3} alt={""}/>
           
            <div className="project-body-text">
                Some key changes were made between the
                prototype and final version. Most strikingly, the
                color pallet was overhauled and standardized
                across the app, and a gator motif was established.
            </div>

            <div className="project-sub-header-text"> 
                Notification Screen
            </div>

            <div className="project-body-text">
                The initial prototype of the notification system used a
                standard toggle setting as can be found on most
                devices. While this system works, our team prioritizes
                finding more enjoyable ways for our users to interact
                with our app beyond basic options.
            </div>

            <img className="SHPE_App_Mockup_1" src={mockup_4} alt={""}/>

            <div className="project-body-text">
                In the revised version, beyond sizing and positioning
                changes, we adjusted the toggle system to encompass
                each option’s respective icon. When selected, the icon
                will become orange to show its activation.
            </div>

            <div className="project-sub-header-text"> 
                Points Program Screen
            </div>

            <div className="project-body-text">
                The notification screen was the first screen designed for
                the SHPE UF app and underwent the greatest change.
                The initial design (left) suffers from poor visual hierarchy:
                while the redeem button is arguably the most important
                function of the initial design, the garish color choices for
                the seasonal icons distracts the user. Additionally, the
                layout of the design is very top-heavy and becomes
                partially covered by modern phone camera notches. 
            </div>

            <img className="SHPE_App_Mockup_2" src={mockup_5} alt={""}/>

            <div className="project-body-text">
                In the revised version, beyond sizing and positioning
                changes, we adjusted the toggle system to encompass
                each option’s respective icon. When selected, the icon
                will become orange to show its activation.
            </div>

            <div className="project-body-text">
                The revised design uses gentler colors and places more
                emphasis on the redeem button through positioning to the
                screen’s center and adding whitespace around the button.
            </div>

            <div className="project-header-text"> 
                AVAILABLE NOW!
            </div>

            <div className="project-body-text">
                The SHPE UF app is now available for iOS and is in beta testing for Android devices. Upcoming version updates
                will include a QR code scanner for easy point redemption and an interactive map interface to navigate to events.
                The full app includes many more pages and features than those showcased here, so be sure to check it out!
            </div> 

            <img className="SHPE_App_Mockup_2" src={mockup_6} alt={""}/>
        </div>
    </>
    );
};

export default App;
