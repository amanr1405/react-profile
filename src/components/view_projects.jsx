import react from "react";
import '../index.css';
import btn from '../images/pin.svg';



function View_projects(props){
return(<>
    <div className="view">
        <div className="view_element">
            <div className="view_photo">
                <img src={props.cal} alt="button" />
            </div>
            <div className="view_des">
                <div><h2>{props.title}</h2>
                <p>{props.des}</p></div>
                <div className="view_btn">
                <img src={btn} alt="button" />
            </div>
            </div>
            
        </div>
    
    </div>

</>);
}

export default View_projects;


