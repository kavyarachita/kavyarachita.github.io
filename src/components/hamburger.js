import React from "react";
import MenuItems from "./MenuItems";

const HamburgerMenu = ({ items }) => {
    return (
        <div className="hamburger-menu-container">
            <ul className="hamburger-nav">
                {
                    items.map((menu, index) => {
                        return <MenuItems items={menu} key={index} />;
                    })
                }
            </ul >
        </div>
    );

}

export default HamburgerMenu;