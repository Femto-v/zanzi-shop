"use client";
import { useState } from "react";

export default function Navbar() {
    // State to manage the visibility of the menu
    const [isOpen, setIsOpen] = useState(false);
    // Handle toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-4">
            <button
                className="md:hidden text-pink-400 focus:outline-none"
                onClick={toggleMenu}
            >
                {/* Simple Hamburger Icon */}
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <img src="" alt="" />
            <nav className="hidden md:flex justify-between items-center p-4 bg-gray-800 ">
                <ul className="flex">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signup">Signup</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
