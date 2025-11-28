import React from "react";
import '../index.css';  
import img1 from '../images/browser.svg';
import btn from '../images/arrow-right.svg';

function Info(){
    return(<>
        <div className="info2">
            <div className="elements">
                <img src={img1} alt="Layers"/>
                <h2>ARDUINO, FIGMA, WORDPRESS, REACTJS</h2>

                <div className="btn2">
                    <img src={btn} alt="button"/>
                </div>

            </div>
        </div>
    </>)
}

export default Info;