import { useState } from 'react';
import React from 'react';
import './MobileNavigation.css'

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="mobileNavbar">
            <br /><br />
            <div className="flex p-1.5 border-2 items-center justify-center bg-cyan-950">
                <div id='MyHeight' className={`max-w-[1200px] w-full fixed bottom-0 z-[1000] flex justify-around items-center log shadow-[0px_-2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 ${isMenuOpen ? 'h-[13rem]' : 'h-[6rem]'} `}>
                    {/* <div >
                        <div className="absolute z-10 bottom-5 left-5 flex items-center text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                            <span className="ml-2">Home</span>
                        </div>
                        <div className="absolute z-10 bottom-5 right-5 flex items-center text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                            <span className="ml-2">Profile</span>
                        </div>
                    </div> */}

                    {/* Expanding Circle Effect */}
                    <div className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 bgblue300 rounded-full  transition-all duration-500 ${isMenuOpen ? 'w-[300px] h-[300px] bottom-[-120px] opacity-100' : 'w-[60px] h-[60px] rotate-180 opacity-0'}`}></div>

                    {/* Menu Items */}
                    <div className={`absolute bottom-[100px] left-1/2 transform -translate-x-1/2 flex flex-col gap-5 transition-all  duration-300 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                        <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-700 rounded-full">
                            <img src="/" alt="logo" className="invert" />
                        </div>
                        <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-700 rounded-full">
                            <img src="/" alt="logo" className="invert" />
                        </div>
                        <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-700 rounded-full">
                            <img src="/" alt="logo" className="invert" />
                        </div>
                        <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-700 rounded-full">
                            <img src="/" alt="logo" className="invert" />
                        </div>
                        <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-700 rounded-full">
                            <img src="/" alt="logo" className="invert" />
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${isMenuOpen ? 'rotate-360' : 'rotate-0'}`}
                    >
                        <span className="text-2xl text-gray-700">×</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
























// import React from 'react'
// import './MobileNavigation.css'

// function MobileNav() {
//     return (
//         <div>

//             <div id='mbbottom' className="nav-bar">
//                 <a heref="" className={`nav-item`}>
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
//                     Home
//                 </a>
//                 <a heref="" id='this' className="nav-item">
//                     <i class="fa-regular fa-heart"></i>
//                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> */}
//                     Search
//                 </a>

//                 <div id='call' className="center-button" ><a heref="">+</a></div>

//                 <a href="#BestBrand" className="nav-item">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
//                     Saved
//                 </a>
//                 <a heref="" className="nav-item active">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path><path d="M22 22l-4-4M6 22l-4-4"></path></svg>
//                     Profile
//                 </a>
//             </div>

//         </div>
//     )
// }

// export default MobileNav