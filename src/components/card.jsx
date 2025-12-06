import React, { useState, useEffect } from "react";
import exp from '../images/profile.png';
import git from '../images/links/github.png';
import insta from '../images/links/instagram.png';
import linked from '../images/links/linkedin.png';
import mail from '../images/links/email.png';
import '../index.css';


function Card(){
    const roles = ["Developer", "UI/UX Designer", "Software Engineer"];
    const [displayText, setDisplayText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        
        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setDisplayText(currentRole.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentRole.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex, roles]);

    return(
        <>
        <div className="card">
            <div className="half"></div>

            <div className="card_content">
                <img src={exp} alt="Avatar" />
                <h3>{displayText}<span className="typing-cursor">|</span></h3>
            </div>

            <div className="card_content2">
                <div><p> A Software Engineer who has developed countless innovative solutions.</p></div>
                <div className="card_content3">
                    <a href="https://github.com/amanr1405"><img src={git} alt="GitHub" /></a>
                    <a href="https://www.instagram.com/dev_aman14"><img src={insta} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/amanr1405/"><img src={linked} alt="LinkedIn" /></a>    
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;