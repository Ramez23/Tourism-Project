// BottomNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function BottomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    return (
        <nav className="navbar-bottom">
            <div className="menu-button" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#343a40" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>

                <p>Menu</p>
            </div>
            <ul className={isMenuOpen ? "nav-list-float open" : "nav-list-float"}>
                <li>
                    <Link to={'/'} className="nav-link-float">Home</Link>
                </li>
                <li>
                    <Link to={'/allplaces'} className="nav-link-float">Tours</Link>
                </li>
                <li>
                    <Link to={'/tourguides'} className="nav-link-float">Tour Guides</Link>
                </li>
                <li>
                    <Link to={'/aboutus'} className="nav-link-float">About Us</Link>
                </li>
                <li>
                    <Link to={'/blog'} className="nav-link-float">Blog</Link>
                </li>
                <li>
                    <Link to={'/sign'} className="nav-link-float">Log In</Link>
                </li>
            </ul>
        </nav>
    );
}

export default BottomNavbar;
