import React from "react";  
import '../index.css';

function Tool_element(props){
    return(<>
        <div className="tool_element">
            <div className="tool_element1">
                <img src={props.image} alt="" />
            </div>
            <div className="tool_element2">
                <h1>{props.title}</h1>
                <p>{props.des}</p>
            </div>
        </div>
    </>);
}

export default Tool_element;   