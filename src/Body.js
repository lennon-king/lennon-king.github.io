import ProjectCard from './ProjectCard';
import Brain from './Brain.png';

const App = () => {
    const project = {
        title: "Why Does This Matter?",
        description: "Learn more about the Forget-Me Project, our goals, and why this pursuit matters. Discover how we aim to reshape digital memory with ethical AI, and explore our vision for a future where technology is a reflection of humanity.",
        image: Brain,
        link: "#/forget-me-project"
    };
    
    return (
        <>
            {/* Section Header */}
            <div className="project-card-background"> 
                Our Mission
            </div>

            <div className="project-card-sub-text"> 
                The Forget-Me Project exists to restore dignity, compassion, and agency in the digital age 
                by designing AI systems that can ethically forget. We challenge the default logic of total retention
                and build technologies that honor human change, privacy, and psychological closure. Our mission is to
                create purposeful, transparent, and morally guided forgetting—so that digital systems support growth, 
                not surveillance.
            </div>

            <div className="app-container">
                <ProjectCard 
                    title={project.title} 
                    description={project.description} 
                    image={project.image} 
                    link={project.link} 
                />
            </div>
        </>
    );
};

export default App;
