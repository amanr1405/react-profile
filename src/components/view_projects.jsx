import react from "react";
import '../index.css';
import btn from '../images/pin.svg';



function View_projects(props) {
    return (<>
        <div className="view">
            <a href={props.btn}>
                <div className="view_element">
                    <div className="view_photo">
                        <img src={props.cal} alt="button" />
                    </div>
                    <div className="view_des">
                        <h2>{props.title}</h2>
                        <p>{props.des}</p>
                    </div>

                </div>
            </a>
        </div>

    </>);
}

export default View_projects;


