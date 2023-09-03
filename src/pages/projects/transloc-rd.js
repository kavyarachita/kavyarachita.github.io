import React from "react";
import "../../styles/project.css";
import "../../styles/app.css";
import { projectItems } from "../../projectItems";
import WIP from "../../components/wip";
import Footer from "../../components/footer";

function ProjectOne() {

    return (
        <div className="page-container project left-align-container transloc">
            <div className="project-opener-split">
                <div className="project-opener-left">
                    <h1>{projectItems[0].title}</h1>
                    <h3>{projectItems[0].desc}</h3>
                    <div className="project-summary-container">
                        <div >
                            <h5>Timeline</h5>
                            <p>{projectItems[0].timeLength}</p>
                            <p>{projectItems[0].timeline}</p>
                        </div>
                        <div>
                            <h5>Team</h5>
                            {projectItems[0].team.map((content) => (
                                <p>{content}</p>
                            ))}
                        </div>
                        <div>
                            <h5>Role</h5>
                            {projectItems[0].role.map((content) => (
                                <p>{content}</p>
                            ))}
                        </div>
                        <div>
                            <h5>Location</h5>
                            <p>{projectItems[0].location}</p>
                        </div>
                    </div>
                    <div>
                    <h5>Problem</h5>
                        <p>{projectItems[0].problem}</p>
                        <div className="center-card">
                            <h5>{projectItems[0].question}</h5>
                        </div>
                    </div>
                </div>
                <div className="project-opener-right">
                    <img id="group-mockup" src={require('../../assets/projects/transloc/group-mockup.png')} alt="3 iPhone Mockup Screens of the Final Design" />
                </div>
            </div>
            <div>
                <h4>PROCESS</h4>
                <WIP/>
            </div>
            <Footer />
        </div>
    );
}
export default ProjectOne;