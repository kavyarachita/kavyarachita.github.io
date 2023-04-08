import React from "react";
import "../styles/sidenav.css"
import Logo from "./logo"
import Socials from "./socials";



function SideNav () {

    return (
        <div className="sidenav-container">
            <div className="sidenav">
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="info-container">
                    <p className="header-text name-title">Kavya Annapareddy</p>
                    <Socials />
                </div>
                <div className="header-text nav-container">
                    <a href="./">Home</a>
                    <a href="./">Resume</a>
                    <a href="./">Work</a>
                    <a href="./">Play</a>
                </div>
                <div className="nav-footer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3125 18.7501C7.90898 18.7501 5.60389 17.7953 3.90434 16.0958C2.2048 14.3962 1.25 12.0911 1.25 9.6876C1.25 6.01572 3.35938 2.72353 6.62539 1.30205C6.7405 1.25188 6.86804 1.23755 6.99141 1.26092C7.11478 1.28429 7.22825 1.34427 7.31704 1.43306C7.40583 1.52184 7.46581 1.63532 7.48918 1.75868C7.51255 1.88205 7.49821 2.0096 7.44805 2.12471C7.07305 2.98564 6.875 4.08838 6.875 5.3126C6.875 9.62041 10.3797 13.1251 14.6875 13.1251C15.9117 13.1251 17.0145 12.927 17.8754 12.552C17.9905 12.5019 18.118 12.4876 18.2414 12.5109C18.3648 12.5343 18.4783 12.5943 18.567 12.6831C18.6558 12.7718 18.7158 12.8853 18.7392 13.0087C18.7625 13.1321 18.7482 13.2596 18.698 13.3747C17.2766 16.6407 13.9844 18.7501 10.3125 18.7501Z" fill="#252525" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
export default SideNav;