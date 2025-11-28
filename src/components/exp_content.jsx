import React from "react";
import '../index.css';
import btn from '../images/pin.svg';


function Exp_content(props) {
    return (
        <>
            <div className="exp_content">
                <div className="exp_content_left">
                    <h1>{props.title}</h1><br />
                    <p>{props.description}</p><br />
                    <p>{props.due}</p>
                </div>
                <div className="exp_content_right">
                    <img src={btn} alt="button" />
                </div>
            </div>
        </>
    )
}

export default Exp_content;