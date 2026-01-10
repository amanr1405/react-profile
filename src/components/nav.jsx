import home from '../images/home.svg';
import like from '../images/download.svg';
import tool from '../images/magic-wand.svg';
import project from '../images/folder.svg';
import exp from '../images/briefcase.svg';

import '../index.css';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

function Nav() {
    return (
        <nav>
            <div className="navbar">
                <ul>
                    <li><a onClick={() => scrollToSection('home')}><img src={home} alt="Home" /></a></li>
                    <li><a onClick={() => scrollToSection('projects')}><img src={project} alt="project" /></a></li>
                    <li><a onClick={() => scrollToSection('experience')}><img src={exp} alt="Experience" /></a></li>
                    <li><a onClick={() => scrollToSection('tools')}><img src={tool} alt="tools" /></a></li>
                    <li><a href="/Aman_PHP_Dev.pdf" download="Aman_Resume.pdf"><img src={like} alt="contact" /></a></li>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;
