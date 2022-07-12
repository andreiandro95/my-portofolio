import React from 'react';
import "../Style/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Nav() {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    return (
        <nav className={`navigation ${openMenuMobile ? 'black-background' : 'normal'}`} id="home">
            <div className="logo">
                <span className="nam"><a href="#home">Andrei</a></span>
            </div>
            <div className="menu">
                <div className="menu-btn-mobile" onClick={()=>setOpenMenuMobile(!openMenuMobile)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`navigation-menu ${openMenuMobile ? 'active' : 'inactive'}`}>
                    <ul>
                        <li><a href="#about-me">About me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact-me">Contact me</a></li>
                    </ul>
                </div>
            </div>
            <div className="back-to-top" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}><FontAwesomeIcon icon={faArrowUpLong} /></div>
        </nav>
    );
}

export default Nav;