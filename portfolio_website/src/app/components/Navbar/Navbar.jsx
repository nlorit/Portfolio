
import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevMenuState) => !prevMenuState);
    }
    return (
        <>
            <nav className={isMenuOpen ? 'menu-open' : ''}>
                <div className="main_div_navbar">
                    <div className="logo_div_navbar">
                        <a href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Calque 1"
                                viewBox="0 0 413.82 403.65"
                                height={'50px'}
                            >
                                <defs>
                                    <clipPath id="clippath">
                                        <path fill="none" strokeWidth="0" d="M0 0H413.82V403.65H0z"></path>
                                    </clipPath>
                                    <clipPath id="clippath-1">
                                        <path fill="none" strokeWidth="0" d="M0 0H413.82V403.65H0z"></path>
                                    </clipPath>
                                    <clipPath id="clippath-2">
                                        <path fill="none" strokeWidth="0" d="M0 0H413.82V403.65H0z"></path>
                                    </clipPath>
                                    <clipPath id="clippath-3">
                                        <path fill="none" strokeWidth="0" d="M0 0H413.82V403.65H0z"></path>
                                    </clipPath>
                                </defs>
                                <path
                                    fill="#a6f634"
                                    strokeWidth="0"
                                    d="M351.87 65.36L410.87 95.36 411.1 187.36 351.65 218.36 351.87 65.36z"
                                ></path>
                                <g clipPath="url(#clippath)">
                                    <path
                                        fill="none"
                                        stroke="#292627"
                                        strokeWidth="3"
                                        d="M351.87 65.36L410.87 95.36 411.1 187.36 351.65 218.36 351.87 65.36z"
                                    ></path>
                                </g>
                                <path
                                    fill="#FFFFFF"
                                    strokeWidth="0"
                                    d="M235.58 4.36L294.58 34.36 294.58 308.36 411.58 247.36 412.31 309.19 235.36 400.36 235.58 4.36z"
                                ></path>
                                <g clipPath="url(#clippath-1)">
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="3"
                                        d="M235.58 4.36L294.58 34.36 294.58 308.36 411.58 247.36 412.31 309.19 235.36 400.36 235.58 4.36z"
                                    ></path>
                                </g>
                                <path
                                    fill="#a6f634"
                                    strokeWidth="0"
                                    d="M118.58 247.36L177.58 278.36 177.82 401.18 118.35 370.36 118.58 247.36z"
                                ></path>
                                <g clipPath="url(#clippath-2)">
                                    <path
                                        fill="none"
                                        stroke="#292627"
                                        strokeWidth="3"
                                        d="M118.58 247.36L177.58 278.36 177.82 401.18 118.35 370.36 118.58 247.36z"
                                    ></path>
                                </g>
                                <path
                                    fill="#FFFFFF"
                                    strokeWidth="0"
                                    d="M179.46 2.48L179.46 218.12 60.73 157.3 60.5 339.3 1.73 309.3 1.5 94.3 37.73 78.3 119 106.3 119 34.3 179.46 2.48z"
                                ></path>
                                <g clipPath="url(#clippath-3)">
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="3"
                                        d="M179.46 2.48L179.46 218.12 60.73 157.3 60.5 339.3 1.73 309.3 1.5 94.3 37.73 78.3 119 106.3 119 34.3 179.46 2.48z"
                                    ></path>
                                </g>
                            </svg>
                        </a>
                    </div>

                    <div className="right_div_navbar">
                        <div className="links_div_navbar">
                            <a className="active" href="/">
                                Home
                            </a>
                            <a href="/project">My projects</a>
                            <a href="/about">About me</a>
                        </div>

                        <div className="button_div_navbar">
                            <button>
                                <a href="/about">Contact</a>
                            </button>
                        </div>

                        <div className="button_menu_navbar" onClick={toggleMenu}>
                            <svg className="vbp-header-menu-button__svg">
                                <line
                                    x1="0"
                                    y1="50%"
                                    x2="100%"
                                    y2="50%"
                                    className={`top ${isMenuOpen ? 'open' : ''}`}
                                    shape-rendering="crispEdges"
                                />
                                <line
                                    x1="0"
                                    y1="50%"
                                    x2="100%"
                                    y2="50%"
                                    className={`middle ${isMenuOpen ? 'open' : ''}`}
                                    shape-rendering="crispEdges"
                                />
                                <line
                                    x1="0"
                                    y1="50%"
                                    x2="100%"
                                    y2="50%"
                                    className={`bottom ${isMenuOpen ? 'open' : ''}`}
                                    shape-rendering="crispEdges"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="overlay-menu">
                    {/* Your overlay menu content goes here */}
                    <a href="/">Home</a>
                    <a href="/project">My projects</a>
                    <a href="/about">About me</a>
                    <a href="/about">Contact</a>
                </div>
            )}
        </>
    );
}