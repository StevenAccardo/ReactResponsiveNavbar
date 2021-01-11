import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from './Button';
import Dropdown from './Dropdown';

export default function NavBar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    // For the mobile menu, whether to show, or not show the menu.
    function handleClick() {
        setClick(!click);
    }

    // Closes the mobile menu every time that you click on an option
    function closeMobileMenu() {
        setClick(false);
    }

    // When mouse hovers, the dropdown is shown on large screens.
    function onMouseEnter() {
        window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
    }

    // When mouse hovers, the dropdown is not shown.
    function onMouseLeave() {
        setDropdown(false);
    }

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                My Logo <i className='fab fa-firstdraft' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
    );
}