import React from 'react';
import presentationImage from "../Images/presentation.jpg";
import "../Style/presentation.css"

function PresentationHeader() {
    return (
        <div className='first-presentation'>
            <div className="text">
                <div className="hello">Hello!</div>
                <div className="short-presentation">My name is <span className='name'>Andrei Andronachi</span> and I am a Front-End Web Developer.</div>
                <div className="buttons">
                    <a href="#about-me">About me</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="image">
                <img src={presentationImage} alt="tools used for frontend" />
            </div>
        </div>
    );
}

export default PresentationHeader;