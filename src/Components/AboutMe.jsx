import React from 'react';
import "../Style/about-me.css";

import me from "../Images/me.jpg"

function AboutMe() {
    return (
        <div className='about-me-wrapper' id='about-me'>
            <h3 className='title'>About me</h3>
            <div className="about-me">
                <div className="image">
                    <img src={me} alt="me" />
                </div>
                <div className="text">
                    <span>Hello!</span>My name is Andrei Andronachi and before I started learning everything related to frontend development, I learned in high school and college C, C ++, Java, SQL, C #. From June 2020 I started learning HTML, CSS and JS and then I learned about SASS, Bootstrap and React. After I got hired I started to learn and deepen Magento and Wordpress and with these two the PHP programming language.
                    <div className="to-cv"><span className="cv"><a href="https://drive.google.com/file/d/1ablaZNSVBMT9cjUjHBnmpezxSio_zCc0/view?usp=sharing" rel='noindex'>My CV</a></span></div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;