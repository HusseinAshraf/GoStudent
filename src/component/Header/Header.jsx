import React, { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Link } from "react-router";

// Header Component
function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="border-b border-gray-200">
            {/* Top Bar */}
            <div className="bg-[#faf9f7]">
                <div className="max-w-8xl mx-auto flex justify-between items-center h-14 px-4 py-8 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto border-b border-gray-200">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link to={'/'} >
                            <img src="/src/assets/image/logo.svg" alt="GoStudent" className="h-8 sm:h-10" />
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4 text-sm">
                        <a href="#" className="text-blue-800 underline">Login</a>
                        <button className="bg-blue-800 text-white px-6 py-2.5 h-[38px] text-sm font-semibold rounded-sm hover:bg-blue-800 transition">
                            Get started
                        </button>
                        <div className="flex items-center space-x-1  cursor-pointer">
                            <svg viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-8 stroke-blue-800">
                                <path d="M2.5 4.61279H12.8451" strokeWidth="1.25"></path>
                                <path d="M7.31812 3.125V4.60261" strokeWidth="1.25"></path>
                                <path d="M10.5979 4.61279C9.85908 6.82981 7.64266 10.5244 3.20862 13.8497M5.05624 6.82981C5.79504 8.06136 7.79018 10.8938 9.85908 12.3721" strokeWidth="1.25"></path>
                                <path d="M11.0541 16.8749L11.9948 14.1228M17.3351 16.8749L16.2771 14.1228M11.9948 14.1228L14.0099 8.22607L16.2771 14.1228M11.9948 14.1228H16.2771" strokeWidth="1.25" strokeLinejoin="bevel"></path>
                                <path d="M32.8 8.39995L28 13.2L23.2 8.39995" strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <nav className="bg-white hidden md:flex justify-center space-x-24 text-xl text-gray-800 h-12 items-center py-8 px-4">
                <Dropdown label="How it works" items={["Overview", "Features", "FAQ"]} />
                <a href="#" className="hover:text-blue-600">Prices</a>
                <Dropdown label="Online tutoring" items={["Math", "Science", "English"]} />
                <Dropdown label="Become a tutor" items={["Apply", "Requirements"]} />
                <a href="#" className="hover:text-blue-600">Blog</a>
                <a href="#" className="hover:text-blue-600">Get in touch</a>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-white p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.svg" alt="GoStudent" className="h-6" />
                            <span className="text-blue-800 font-semibold text-lg">GoStudent</span>
                        </div>
                        <button onClick={() => setMobileOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="space-y-4 text-sm text-gray-800">
                        <a href="#" className="block hover:text-blue-600">How it works</a>
                        <a href="#" className="block hover:text-blue-600">Prices</a>
                        <a href="#" className="block hover:text-blue-600">Online tutoring</a>
                        <a href="#" className="block hover:text-blue-600">Become a tutor</a>
                        <a href="#" className="block hover:text-blue-600">Blog</a>
                        <a href="#" className="block hover:text-blue-600">Get in touch</a>
                        <hr />
                        <a href="#" className="text-blue-700 hover:underline">Login</a>
                        <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Get started</button>
                    </nav>
                </div>
            )}
        </header>
    );
}

// Dropdown Component
function Dropdown({ label, items }) {
    return (
        <div className="relative group">
            {/* Trigger */}
            <div className="flex items-center space-x-1 cursor-pointer text-gray-800 group-hover:text-blue-800">
                <span>{label}</span>
                <ChevronDown size={16} />
            </div>

            {/* Dropdown menu */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {/* Arrow */}
                <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200 z-10"></div>

                {/* Menu Items */}
                <div className="py-2">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Header;
