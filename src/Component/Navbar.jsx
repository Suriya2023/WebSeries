import React, { useState } from 'react';
import './navbar.css';

import logo from './/Images/logo.png';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-wrapper"> 
            <div className="navbar-container">
                <nav className="navbar1">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                       
                    </div>
                   
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li><a href="#">Home</a></li>
                        {/* <li>
                            <a href="#">Genres ▾</a>
                            <ul className="dropdown">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Comedy</a></li>
                            </ul>
                        </li> */}
                        <li><a href="#">Trending ▾</a></li>
                        <li><a href="#">Top Rated ▾</a></li>
                        <li><a href="#">New Releases ▾</a></li>
                        <li><a href="#">Upcoming ▾</a></li>
                        {/* <li><a href="#">Reviews ▾</a></li> */}
                        <li><a href="#">Tickets</a></li>
                    </ul>
                    <div className="buttons">
                        <button className="try-btn">Watch Free</button>
                        <button className="sign-btn">Sign in</button>
                    </div>
                </nav>
            </div></div>
    );
}

export default Navbar;
