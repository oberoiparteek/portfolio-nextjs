
"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const activeSection = useActiveSection();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header>
            <div>
                <div className="heading-name">
                    <span>Parteek Kumar</span>
                </div>
                <div className="header-statement">
                    <span>Senior Frontend Engineer at Cvent</span>
                </div>
                <p className="header-description">
                    I build scalable customer-facing web applications and developer tools
                    that solve real user problems
                </p>
                <ul className="nav">
                    <li className={`about - nav ${ activeSection === "about" ? "active" : "" } `}>
                        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                            <span />
                            <small>
                                <b> ABOUT</b>
                            </small>
                        </a>
                    </li>
                    <li className={`skills - nav ${ activeSection === "skills" ? "active" : "" } `}>
                        <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
                            <span />
                            <small>
                                <b> SKILLS</b>
                            </small>
                        </a>
                    </li>
                    <li className={`experience - nav ${ activeSection === "experience" ? "active" : "" } `}>
                        <a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>
                            <span />
                            <small>
                                <b> EXPERIENCE</b>
                            </small>
                        </a>
                    </li>
                    <li className={`education - nav ${ activeSection === "education" ? "active" : "" } `}>
                        <a href="#education" onClick={(e) => handleNavClick(e, "education")}>
                            <span />
                            <small>
                                <b> EDUCATION</b>
                            </small>
                        </a>
                    </li>
                    <li className={`projects - nav ${ activeSection === "projects" ? "active" : "" } `}>
                        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
                            <span />
                            <small>
                                <b> PROJECTS</b>
                            </small>
                        </a>
                    </li>
                    <li className={`publications - nav ${ activeSection === "publications" ? "active" : "" } `}>
                        <a href="#publications" onClick={(e) => handleNavClick(e, "publications")}>
                            <span />
                            <small>
                                <b> PUBLICATIONS</b>
                            </small>
                        </a>
                    </li>
                    <li className={`volunteering - nav ${ activeSection === "volunteering" ? "active" : "" } `}>
                        <a href="#volunteering" onClick={(e) => handleNavClick(e, "volunteering")}>
                            <span />
                            <small>
                                <b> VOLUNTEERING</b>
                            </small>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact">
                <div className="wrapper">
                    <ul aria-label="Social media" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <li><ThemeToggle /></li>
                        <li className="tooltip">
                            <a
                                href="https://github.com/oberoiparteek"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="tooltiptext">github.com/oberoiparteek</p>
                                <span className="visually-hidden">GitHub</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="tooltip">
                            <a
                                href="https://instagram.com/oberoi.parteek"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="tooltiptext">instagram.com/oberoi.parteek</p>
                                <span className="visually-hidden">Instagram</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1000 1000"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="tooltip">
                            <a
                                href="https://twitter.com/oberoi_parteek"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="tooltiptext">twitter.com/oberoi_parteek</p>
                                <span className="visually-hidden">Twitter</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 248 204"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        id="white_background"
                                        d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li className="tooltip">
                            <a
                                href="https://www.linkedin.com/in/kumarparteek/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="tooltiptext">linkedin.com/in/kumarparteek</p>
                                <span className="visually-hidden">LinkedIn</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="tooltip">
                            <a
                                href="mailto:oberoi.parteek@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="tooltiptext">Email me at: oberoi.parteek@gmail.com</p>
                                <span className="visually-hidden">
                                    Email me at: oberoi.parteek@gmail.com
                                </span>
                                <svg
                                    width="200.000000pt"
                                    height="131.000000pt"
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200.000000 131.000000"
                                    preserveAspectRatio="xMidYMid meet"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)">
                                        <path
                                            d="M58 1294 c-59 -32 -58 -21 -58 -639 0 -516 2 -569 17 -596 37 -62 -6
                             -59 980 -59 1004 0 948 -4 986 70 16 32 17 77 15 602 l-3 568 -33 32 -32 33
                             -923 2 c-802 2 -926 0 -949 -13z m1822 -48 c0 -6 -807 -726 -846 -755 -27 -20
                             -35 -21 -55 -11 -17 9 -607 529 -863 761 -6 5 382 9 877 9 488 0 887 -2 887
                             -4z m-1483 -335 c150 -133 275 -245 277 -250 3 -5 -134 -133 -304 -285 l-310
                             -277 0 558 0 557 33 -30 c17 -17 154 -140 304 -273z m1543 -251 c0 -302 -3
                             -550 -7 -550 -13 0 -608 535 -608 546 0 9 602 554 612 554 2 0 3 -247 3 -550z
                             m-1097 -145 c98 -86 111 -95 148 -95 54 0 68 9 177 107 51 46 98 83 104 81 15
                             -5 607 -532 607 -540 1 -5 -398 -8 -886 -8 -869 0 -887 0 -868 19 72 68 597
                             531 603 531 4 0 56 -43 115 -95z"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}