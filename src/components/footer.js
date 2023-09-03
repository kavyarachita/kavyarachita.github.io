
import React from "react";
import "../styles/footer.css"

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-line"></div>
            <div className="footer-container">
                <div className="footer-copyright">
                    <p>© 2023 Kavya Annapareddy</p>
                </div>
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/kavya-annapareddy-0209021b5/" target="_blank" rel="noopener noreferrer">
                        <img className="footer-socials-img" src={require('../assets/logos/socials/linkedin-logo.svg').default} alt="LinkedIn" />
                    </a>
                    <a href="mailto:kra7ejt@virginia.edu" target="_blank" rel="noopener noreferrer">
                        <img className="footer-socials-img" src={require('../assets/logos/socials/mail-logo.svg').default} alt="Email" />
                    </a>
                    <a href="https://github.com/kavyarachita" target="_blank" rel="noopener noreferrer">
                        <img className="footer-socials-img" src={require('../assets/logos/socials/github-logo.svg').default} alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer;