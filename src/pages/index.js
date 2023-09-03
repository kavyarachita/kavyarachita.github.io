import React from "react";
import Footer from "../components/footer";
import "../styles/app.css";

const Work = () => {
    
    return (
        <div className="page-container">
            <div className="home-container">
                <div className="home-image-container">
                    <img id="home-img" src={require('../assets/home-img.svg').default} alt="Cartoon Drawing of a Girl" />
                </div>
                <div className="home-div-1">
                    <div className="home-div-2">
                        <h1>Hi, I'm Kavya!</h1>
                        <p>[kah-vyah]</p>
                    </div>
                    <p className="paragraph">I'm a Product Designer who <span className="span-1"><strong>designs</strong></span> and <span className="span-2"><strong>codes</strong></span> intuitive and inclusive experiences for <span className="span-3"><strong>communities.</strong></span></p>
                    <p className="paragraph-2">Computer Science @ The University of Virginia | Dec 2023</p>
                </div>
            </div>
            <div className="home-projects-container">
                <h2 id="project-title">Projects</h2>
                <div className="home-projects-div">
                    <a href="/transloc-redesign" className="home-project-card transloc">
                        <img className="project-img" src={require('../assets/projects/transloc/home-card-mockup-transloc.png')} alt="Mockups Screens for the Transloc App Redesign" />
                        <div className="home-project-card-text">
                            <h1>TRANSLOC REDESIGN</h1>
                            <h3 className="card-desc-text">Reimagining a more accessible way to use public transportation</h3>
                        </div>
                    </a>
                    <a href="/study-buddy" className="home-project-card study-buddy">
                        <img className="project-img" src={require('../assets/projects/study-buddy/home-card-mockup-study-buddy.png')} alt="Mockups Screens for the Transloc App Redesign" />
                        <div className="home-project-card-text">
                            <h1>STUDY BUDDY</h1>
                            <h3 className="card-desc-text">Study your best with the right friends to study with</h3>
                        </div>
                    </a>
                    <a href="/study-space" className="home-project-card study-space">
                        <img className="project-img" src={require('../assets/projects/study-space/home-card-mockup-study-space.png')} alt="Mockups Screens for the Transloc App Redesign" />
                        <div className="home-project-card-text">
                            <h1>STUDY SPACE</h1>
                            <h3 className="card-desc-text">Find your best study space on Grounds</h3>
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default Work;