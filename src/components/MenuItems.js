import React from 'react';
import Dropdown from './dropdown';
import { useState } from "react";
import { Link } from 'react-router-dom';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <Link to={items.url}>{items.title}</Link>
                    <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}>
                        <img src={require('../assets/dropdown.svg').default} alt="arrow" />
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;