import React, { useState, useRef } from 'react';
import "../Style/skills.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import html from "../Images/html.png";
import css from "../Images/css.png";
import bootstrap from "../Images/bootstrap.png";
import sass from "../Images/sass.png";
import js from "../Images/js.png";
import jquery from "../Images/jquery.png";
import react from "../Images/react.png";
import php from "../Images/php.png";
import sql from "../Images/sql.png";
import magento from "../Images/magento.png";
import wordpress from "../Images/wordpress.png";

const Skills = () => {
    const [hideForwardBtn, sethideForwardBtn] = useState(false)
    const [hideBackBtn, sethideBackBtn] = useState(true)
    const ref = useRef(null);

    const scrollForwardCategories = (e) => {
        if(ref.current.scrollLeft === ref.current.scrollLeftMax){
            sethideForwardBtn(prevState => true);
        }else{
            sethideForwardBtn(prevState => false);
            ref.current.scrollLeft += 300;
        }   
        sethideBackBtn(prevState => false);
    }

    const scrollBackCategories = (e) => {
        if(ref.current.scrollLeft === 0){
            sethideBackBtn(prevState => true);
        }else{
            sethideBackBtn(prevState => false);
            ref.current.scrollLeft -= 300;
        }
        sethideForwardBtn(prevState => false);
    }

    return (
        <div className='skills-wrapper' id='skills'>
            <h3 className="title">my skills</h3>
            <div className={`back-btn ${hideBackBtn ? 'hide' : 'show'}`} onClick={scrollBackCategories}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className={`forward-btn ${hideForwardBtn ? 'hide' : 'show'}`} onClick={scrollForwardCategories}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="skills-list" ref={ref}>
                <div className="skill">
                    <img src={html} alt="html logo" />
                    <h5>html</h5>
                </div>
                <div className="skill">
                    <img src={css} alt="css logo" />
                    <h5>css</h5>
                </div>
                <div className="skill">
                    <img src={sass} alt="sass logo" />
                    <h5>sass</h5>
                </div>
                <div className="skill">
                    <img src={bootstrap} alt="bootstrap logo" />
                    <h5>bootstrap</h5>
                </div>
                <div className="skill">
                    <img src={js} alt="js logo" />
                    <h5>js</h5>
                </div>
                <div className="skill">
                    <img src={jquery} alt="jquery logo" />
                    <h5>jquery</h5>
                </div>
                <div className="skill">
                    <img src={react} alt="react logo" />
                    <h5>react</h5>
                </div>
                <div className="skill">
                    <img src={php} alt="php logo" />
                    <h5>php</h5>
                </div>
                <div className="skill">
                    <img src={sql} alt="sql logo" />
                    <h5>sql</h5>
                </div>
                <div className="skill">
                    <img src={magento} alt="magento logo" />
                    <h5>magento</h5>
                </div>
                <div className="skill">
                    <img src={wordpress} alt="wordpress logo" />
                    <h5>wordpress</h5>
                </div>
            </div>
        </div>
    );
};

export default Skills;