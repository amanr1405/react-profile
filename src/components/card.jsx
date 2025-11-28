import React from "react";
import exp from '../images/profile.png';
import git from '../images/links/github.png';
import insta from '../images/links/instagram.png';
import linked from '../images/links/linkedin.png';
import mail from '../images/links/email.png';


function Card(){
    return(
        <>
        <div className="card">
            <div className="half"></div>

            <div className="card_content">
                <img src={exp} alt="Avatar" />
                <h2>Developer</h2>
            </div>

            <div className="card_content2">
                <div><p> A Software Engineer who has developed countless innovative solutions.</p></div>
                <div className="card_content3">
                    <img src={git}  />
                    <img src={insta}  />
                    <img src={linked}  />
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;