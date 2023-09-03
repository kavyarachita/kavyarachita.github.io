import React from "react";
import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'
import HamburgerMenu from './hamburger';
import { useState } from 'react';
import "../styles/hamburger.css"

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);

    return (
        <nav>
            <div className="hamburger-menu">
                <button type="button" aria-haspopup="menu" aria-expanded={hamburger ? "true" : "false"}
                    onClick={() => setHamburger((hamburger) => !hamburger)}>
                    <img src={require('../assets/hamburger-md.svg').default} alt="hamburger menu" className="hamburger-icon" />
                </button>
                {hamburger ? <HamburgerMenu items={menuItems} /> : null}
            </div>

            <ul className="menus">
                {
                    menuItems.map((menu, index) => {
                        return <MenuItems items={menu} key={index} />;
                    })
                }
            </ul >
        </nav>
    );
}

export default Navbar;