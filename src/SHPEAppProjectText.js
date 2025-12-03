
import mockup_1 from "./AIPrivacy.jpg"
import mockup_2 from "./AI.webp"
import mockup_3 from "./Forgetfullness.webp"
import mockup_4 from "./Safety.jpg"

const App = () => {
    return (
        <>
        <div className="text-container">
            <img className="SHPE_App_Mockup_1" src={mockup_1} alt={""}/>

            <div className="project-header-text"> 
                Who We Are
            </div>

            <div className="project-body-text">
                The Forget Me Project is a research-driven, ethics-first organization dedicated to reshaping how artificial 
                intelligence remembers—and how it forgets. We were founded on a simple belief: not all memory is moral. In a 
                digital world designed for total recall, we advocate for AI systems that honor privacy, dignity, and the human 
                need for closure.
            </div>

            <div className="project-body-text">
                Our work brings together engineers, designers, ethicists, and policymakers to challenge the default 
                assumption that more data is always better. Instead, we champion ethical amnesia: AI that forgets intentionally, 
                compassionately, and in alignment with human moral frameworks.
            </div>

            <div className="project-header-text"> 
                What We Do
            </div>

            <div className="project-sub-header-text"> 
                Build Ethical Frameworks for Forgetful AI
            </div>

            <div className="project-body-text">
                We develop guidelines, technical standards, and conceptual models for integrating “moral timers” into AI memory systems.
                These frameworks shift deletion from a negligible backend function to a core ethical behavior, ensuring that data 
                retention is guided not only by utility, but by care, humility, and respect for human growth.
            </div>

            <div className="project-sub-header-text"> 
                Design Human-Centered Prototypes
            </div>

            <div className="project-body-text">
                Our flagship prototype, Digital Amnesia, demonstrates how AI can erase sensitive inputs after user-defined moral 
                intervals. Instead of hoarding personal histories, the system treats memory as a moral object with a life cycle—one 
                that can release, forgive, and make space for change.
            </div>

            <div className="project-sub-header-text"> 
                Promote Transparent Data Culture
            </div>

            <div className="project-body-text">
                We help organizations replace vague retention policies with clear, ritualized deletion logic that users can trust. 
                Through workshops and audits, we assist engineers in designing systems that are both technically honest and ethically 
                grounded—no “fake deletions,” no hidden archives.
            </div>

            <img className="SHPE_App_Mockup_1" src={mockup_3} alt={""}/>

            <div className="project-header-text"> 
                What We’ve Done
            </div>

            <div className="project-sub-header-text"> 
                Developed the Moral TTL (Time-to-Live) Standard
            </div>

            <div className="project-body-text">
                A novel approach to data life cycles, allowing information to “decay” or self-erode based on context—such as 
                trauma markers, confessional speech, or user-defined moral expiration intervals.
            </div>

            <div className="project-sub-header-text"> 
                Launched the Digital Amnesia MVP
            </div>

            <div className="project-body-text">
                A fully functional prototype that performs contextual, not just automatic, forgetting—demonstrating how AI can 
                honor symbolic closure and reduce long-term psychological harm.
            </div>

            <img className="SHPE_App_Mockup_1" src={mockup_4} alt={""}/>

            <div className="project-header-text"> 
                Why It Matters
            </div>

            <div className="project-sub-header-text"> 
                Because AI That Never Forgets Can Hurt People
            </div>

            <div className="project-body-text">
                When personal data is stored indefinitely, individuals become trapped in their pasts. Old messages, private exchanges, 
                confessions, and traumas reappear out of context—algorithmically resurfaced long after their relevance has passed. 
                This creates cycles of anxiety, shame, and misjudgment, especially for vulnerable communities.
            </div>

            <div className="project-sub-header-text"> 
                The Law is Changing
            </div>

            <div className="project-body-text">
                Regulations like GDPR Article 17 and California AB 1008 increasingly demand meaningful, enforceable deletion. 
                Organizations that cannot forget responsibly risk legal penalties and public backlash. Ethical forgetting is rapidly 
                becoming not just a moral imperative—but a compliance requirement.
            </div>

            <div className="project-header-text"> 
                Our Vision
            </div>

            <div className="project-body-text">
                We imagine a future where AI systems behave less like permanent surveillance archives and more like humane 
                partners—capable of discretion, forgiveness, and intentional release. We envision digital spaces where memory 
                serves growth rather than punishment, and where users regain sovereignty over how long their stories are allowed to live.
            </div>

            <img className="SHPE_App_Mockup_1" src={mockup_2} alt={""}/>
        </div>
    </>
    );
};

export default App;
