import React from 'react';
import "../Style/projects.css";

import netflixClone from "../Images/netflix-homepage-clone.png";
import restauranProject from "../Images/restaurant-project.png";
import storeProject from "../Images/store-project.png";
import rockPaperScisor from "../Images/rock-paper-scisor.png";
import toDoList from "../Images/to-do-list.png";
import budgetCalculator from "../Images/budget-calculator.png";

const Projects = () => {
    return (
        <div className='projects-wrapper' id="projects">
            <h3 className="title">my projects</h3>
            <div className="projects-list">
                <div className="project">
                    <img src={netflixClone} alt="netflix clone poster" />
                    <div className="site-information">
                        <div className="to-site"><a href="https://andreiandro95.github.io/my-movies/" title='site location' rel='noindex'>to site</a></div>
                        <div className="to-code"><a href="https://github.com/andreiandro95/my-movies/tree/master" title='code location' rel='noindex'>to github</a></div>
                    </div>
                    <div className="project-name">netflix homepage clone</div>
                </div>
                <div className="project">
                    <img src={restauranProject} alt="restaurant project poster" />
                    <div className="site-information">
                        <div className="to-site"><a href="https://andreiandro95.github.io/react-restaurant/" title='site location' rel='noindex'>to site</a></div>
                        <div className="to-code"><a href="https://github.com/andreiandro95/react-restaurant/tree/master" title='code location' rel='noindex'>to github</a></div>
                    </div>
                    <div className="project-name">restaurant project</div>
                </div>
                <div className="project">
                    <img src={storeProject} alt="store project poster" />
                    <div className="site-information">
                        <div className="to-site"><a href="https://andreiandro95.github.io/sweet-store/" title='site location' rel='noindex'>to site</a></div>
                        <div className="to-code"><a href="https://github.com/andreiandro95/sweet-store" title='code location' rel='noindex'>to github</a></div>
                    </div>
                    <div className="project-name">store project</div>
                </div>
                <div className="project">
                    <img src={rockPaperScisor} alt="rock paper scissors game poster" />
                    <div className="site-information">
                        <div className="to-site"><a href="https://andreiandro95.github.io/rock-paper-scisor/" title='site location' rel='noindex'>to site</a></div>
                        <div className="to-code"><a href="https://github.com/andreiandro95/rock-paper-scisor" title='code location' rel='noindex'>to github</a></div>
                    </div>
                    <div className="project-name">rock paper scissors game</div>
                </div>
                <div className="project">
                    <img src={toDoList} alt="to do list poster" />
                    <div className="site-information">
                        <div className="to-site"><a href="https://andreiandro95.github.io/to-do-list/" title='site location' rel='noindex'>to site</a></div>
                        <div className="to-code"><a href="https://github.com/andreiandro95/to-do-list" title='code location' rel='noindex'>to github</a></div>
                    </div>
                    <div className="project-name">to do list</div>
                </div>
                <div className="project">
                    <img src={budgetCalculator} alt="budget calculator poster" />
                    <div className="site-information">
                        <div className="to-site"><a href="https://andreiandro95.github.io/budget-calculator/" title='site location' rel='noindex'> to site</a></div>
                        <div className="to-code"><a href="https://github.com/andreiandro95/budget-calculator" title='code location' rel='noindex'> to githut</a></div>
                    </div>
                    <div className="project-name">budget calculator</div>
                </div>
            </div>
        </div>
    );
};

export default Projects;