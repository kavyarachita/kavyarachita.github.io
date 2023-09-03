import React from "react";
import Footer from "../components/footer"

const Resume = () => {
    return (
        <div className="page-container">
            <h1>Resume</h1>
            <embed src={require('../assets/Resume_Annapareddy_08-2023.pdf')} width="100%" height="800px" type='application/pdf'/>
            <Footer />
        </div>
    );
}
export default Resume;