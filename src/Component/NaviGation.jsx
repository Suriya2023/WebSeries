import { useState, useEffect } from "react";
import { FaFilm, FaTheaterMasks, FaStar, FaPlayCircle, FaTv, FaVideo, FaTicketAlt } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import Confetti from "react-confetti";
import "./mobnavigation.css";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds
        }
    };

    const buttons = [
        { icon: <FaFilm />, label: "Movies", bg: "bg-[#E50914]", transform: "translate-x-[50px] translate-y-[-50px]" },
        { icon: <FaTheaterMasks />, label: "Genres", bg: "bg-[#FFD700]", transform: "translate-y-[-70px]" },
        { icon: <FaStar />, label: "Favorites", bg: "bg-[#FFB400]", transform: "translate-x-[-50px] translate-y-[-50px]" },
        { icon: <MdMovie />, label: "Clapperboard", bg: "bg-[#333333]", transform: "translate-x-[-70px]" },
        { icon: <FaPlayCircle />, label: "Play", bg: "bg-[#1DB954]", transform: "translate-x-[-50px] translate-y-[50px]" },
        { icon: <FaTv />, label: "TV Shows", bg: "bg-[#4A90E2]", transform: "translate-y-[70px]" },
        { icon: <FaVideo />, label: "Videos", bg: "bg-[#8E44AD]", transform: "translate-x-[50px] translate-y-[50px]" },
        { icon: <FaTicketAlt />, label: "Tickets", bg: "bg-[#FF5733]", transform: "translate-x-[70px]" },
    ];

    return (
        <div id="mycardShow" className={`relative flex items-center justify-center w-fit h-fit transition-all duration-500 ${isOpen ? "p-14 bg-gradient-radial h-full border p-3 via-gray-700 to-transparent scale-110" : "p-0 bg-transparent scale-100"}`} style={{ backgroundColor: isOpen ? "rgba(124, 179, 192, 0.8)" : "transparent" }}>
            {showConfetti && <Confetti numberOfPieces={200} recycle={false} gravity={0.3} colors={["#E50914", "#000000"]} />} 
            <button id="ts"
                className="relative flex cursor-pointer border items-center justify-center p-4 bg-black text-white shadow-md rounded-full z-10 transition-transform duration-300 ease-in-out transform hover:scale-110"
                onClick={toggleMenu}
            >
                <i className={`fa-solid ${isOpen ? "fa-times" : "fa-house"} cursor-pointer transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-180" : "rotate-0"}`}></i>
            </button>
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    className={`absolute flex flex-col items-center justify-center p-3 text-white shadow-md rounded-full transition-all duration-300 ${isOpen ? btn.bg + " " + btn.transform : "opacity-0 scale-0"}`}
                >
                    {btn.icon}
                </button>
            ))}
        </div>
    );
};

export default Navigation;