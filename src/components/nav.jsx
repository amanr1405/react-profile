import react from 'react';
import home from '../images/home.svg';
import like from '../images/heart.svg';
import tool from '../images/magic-wand.svg';
import project from '../images/folder.svg';
import exp from '../images/briefcase.svg';

import '../index.css';


function Nav() {
    return (
        <nav>
            <div className="navbar">
                <ul>
                    <li><a href="#home"><img src={home} alt="Home" /></a></li>
                    <li><a href="#project"><img src={project} alt="project" /></a></li>
                    <li><a href="#experience"><img src={exp} alt="Experience" /></a></li>
                    <li><a href="#tools"><img src={tool} alt="tools" /></a></li>
                    <li><a href="#thoughts"><img src={like} alt="like" /></a></li>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;