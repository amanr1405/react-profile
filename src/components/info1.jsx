import React from "react";
import '../index.css';  
import img1 from '../images/layers.svg';
import btn from '../images/arrow-right.svg';


function Info(){
    return(<>
        <div className="info">
            <div className="elements">
                <img src={img1} alt="Layers"/>
                <h2>UI/UX DESIGNING, FULLSTACK, ROBOTICS</h2>

                {/* <div className="btn1">
                    <img src={btn} alt="button"/>
                </div> */}
                
            </div>
        </div>
    </>)
}

export default Info;