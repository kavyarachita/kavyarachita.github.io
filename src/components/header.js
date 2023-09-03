import React  from 'react';
import Navbar from './navbar';
import Logo from './logo';
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

const Header = () => {    
    return (
        <header>
            <div className="navbar">
                <div className="logo-container">
                    <Link to="/"><Logo /></Link>
                </div>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;