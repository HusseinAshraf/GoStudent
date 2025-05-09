import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "/src/assets/image/logo.svg"

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <header className="border-b border-gray-200">

            <div className="bg-[#faf9f7]">
                <div className="max-w-8xl mx-auto flex justify-between items-center h-14 px-4 py-8 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto border-b border-gray-200">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="h-8 sm:h-10" />
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4 text-sm">
                        <a href="#" className="text-blue-800 underline">{t('login')}</a>
                        <button className="bg-blue-800 text-white px-6 py-2.5 h-[38px] text-sm font-semibold rounded-sm hover:bg-blue-800 transition">
                            {t('get_started')}
                        </button>
                        <div className="relative group">
                            {/* Trigger Icon */}
                            <button
                                className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md hover:bg-gray-100 transition text-base md:text-lg"
                                onClick={() => setIsOpen(!isOpen)}
                                title={t("change_language")}
                            >
                                <svg
                                    viewBox="0 0 36 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-6 md:w-12 md:h-7 stroke-blue-800"
                                >
                                    <path d="M2.5 4.61279H12.8451" strokeWidth="1.25"></path>
                                    <path d="M7.31812 3.125V4.60261" strokeWidth="1.25"></path>
                                    <path
                                        d="M10.5979 4.61279C9.85908 6.82981 7.64266 10.5244 3.20862 13.8497M5.05624 6.82981C5.79504 8.06136 7.79018 10.8938 9.85908 12.3721"
                                        strokeWidth="1.25"
                                    ></path>
                                    <path
                                        d="M11.0541 16.8749L11.9948 14.1228M17.3351 16.8749L16.2771 14.1228M11.9948 14.1228L14.0099 8.22607L16.2771 14.1228M11.9948 14.1228H16.2771"
                                        strokeWidth="1.25"
                                        strokeLinejoin="bevel"
                                    ></path>
                                    <path
                                        d="M32.8 8.39995L28 13.2L23.2 8.39995"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>

                            {/* Dropdown قائمة اللغات */}
                            {isOpen && (
                                <div
                                    className={`absolute ${i18n.language === "ar" ? "left-0" : "right-0"} mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50`}
                                >
                                    <button
                                        onClick={() => changeLanguage("en")}
                                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => changeLanguage("ar")}
                                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        العربية
                                    </button>
                                </div>
                            )}
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


            <nav className="bg-white hidden md:flex justify-center space-x-24 text-xl text-gray-800 h-12 items-center py-8 px-4">
                <Dropdown label={t("how_it_works")} items={[t("overview"), t("features"), t("faq")]} />
                <a href="#" className="hover:text-blue-600">{t("prices")}</a>
                <Dropdown label={t("online_tutoring")} items={[t("math"), t("science"), t("english")]} />
                <Dropdown label={t("become_tutor")} items={[t("apply"), t("requirements")]} />
                <a href="#" className="hover:text-blue-600">{t("blog")}</a>
                <a href="#" className="hover:text-blue-600">{t("contact")}</a>
            </nav>


            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-white p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="GoStudent" className="h-6" />
                        </div>
                        <button onClick={() => setMobileOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="space-y-4 text-sm text-gray-800">
                        <Dropdown label={t("how_it_works")} items={[t("overview"), t("features"), t("faq")]} isMobile={true} />
                        <a href="#" className="block hover:text-blue-600">{t("prices")}</a>
                        <Dropdown label={t("online_tutoring")} items={[t("math"), t("science"), t("english")]} isMobile={true} />
                        <Dropdown label={t("become_tutor")} items={[t("apply"), t("requirements")]} isMobile={true} />
                        <a href="#" className="block hover:text-blue-600">{t("blog")}</a>
                        <a href="#" className="block hover:text-blue-600">{t("contact")}</a>
                        <hr />
                        <a href="#" className="text-blue-700 hover:underline">{t("login")}</a>
                        <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
                            {t("get_started")}
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}


function Dropdown({ label, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative group">

            <div
                className="flex items-center space-x-1 cursor-pointer text-gray-800 group-hover:text-blue-800"
                onClick={toggleDropdown}
            >
                <span>{label}</span>
                <ChevronDown size={16} />
            </div>


            <div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-white border border-gray-200 rounded-md shadow-lg 
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
                    group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}
            >
                <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200 z-10"></div>
                <div className="py-2">
                    {items.map((item, index) => (
                        <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
