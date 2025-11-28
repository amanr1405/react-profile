import react from 'react';
import '../index.css';


function Progress(props){
    return(<>
        <div className="progress">
            <h1>{props.exp} {props.project} {props.hackathon} </h1>
            <p>{props.e_des} {props.p_des} {props.h_des}</p>
        </div>
    
    </>);
}

export default Progress;