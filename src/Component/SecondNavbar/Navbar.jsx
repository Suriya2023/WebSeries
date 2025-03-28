import React, { useState } from "react";
import './Navbar.css'

// import log from '../image/logo.png'
import log2 from '../Images/Logo.png'
// import log2 from '../image/camera.gib'
function Navbar() {


    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return (

        <>


            <nav className="onavbar">
                <div className="nmb">
                    <img className="logos1"
                        src={log2}
                        alt="IMDb Logo"
                        height="30"
                    />
                    &nbsp;
                    <button className="omenu-btn" onClick={toggleMenu}>☰ Menu</button>
                </div>
                {/* <div className="osearch-container"> */}

                {/* <input  type="text" className="osearch-box" placeholder="Search IMDb                    <plantext> Hle</plantext> " /> */}
                <div class="search-box osearch-box">
                    <input type="text" placeholder="Search..." />
                    <i class="fa fa-search"></i> &nbsp; &nbsp; 
                </div>

                {/* <button className="omenu-btn" onClick={toggleMenu}>☰ Menu</button> */}
                {/* <span className="osearch-icon">🔍</span> */}

                {/* </div> */}
                <div className="onav-right">
                    <div
                        className="onotification"
                        onClick={() => alert("You have 5 pending notifications!")}
                    >
                        🔔<span className="onotification-badge">5</span>
                    </div>
                    <a href="#">Watchlist</a>
                    <a href="#">Sign In</a>
                    <a href="#">EN ⌄</a>
                    <span className="theme-toggle" onClick={toggleTheme}>🌙</span>
                </div>

            </nav>
            {menuOpen && (
                <div className="menu" id="menu">
                    <a href="#">All</a>
                    <a href="#">Titles</a>
                    <a href="#">TV Episodes</a>
                    <a href="#">Celebs</a>
                    <a href="#">Companies</a>
                    <a href="#">Keywords</a>
                    <a href="#">Advanced Search</a>
                </div>
            )}
        </>
    )
}



export default Navbar
