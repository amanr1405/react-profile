import React from "react";
import '../index.css';
import Card from './card.jsx';
import Heroic from './heroic.jsx';
import Progress from './progress.jsx';
import Info1 from './info1.jsx';
import Info2 from './info2.jsx';
import Project from './project.jsx';
import View_projects from './view_projects.jsx';
import cal from '../images/links/cal.png';
import report from '../images/links/report.png';
import nandi from '../images/links/nandi.png';
import Exp from './exp.jsx';
import Exp_content from "./exp_content.jsx";
import Tools from "./tools.jsx";
import Tool_element from "./tool_element.jsx";

import vercel from '../images/tool/vercel.svg';
import wordpress from '../images/tool/wordpress.svg';
import figma from '../images/tool/figma.svg';
import arduino from '../images/tool/arduino.svg';
import openai from '../images/tool/openai.svg';
import frame from '../images/tool/react.svg';


import Contact from './contact.jsx';
import ContactForm from "./contactform.jsx";






function Body() {
    return (
        <>
            <div className="content">
                <div className="l_content"><Card /></div>
                <div className="r_content">
                    <Heroic />
                    <div className="project_container">
                        <Progress exp={"+2"} e_des={"YEARS OF EXPERIENCE"} />

                        <Progress project={"+15"} p_des={"PROJECTS COMPLETED"} />
                        <Progress hackathon={"+10"} h_des={"HACKATHONS PARTICIPATED"} />
                    </div>
                    <div className="info_container">
                        <Info1 />

                        <Info2 />
                    </div>
 
                    <div className="recent_projects"><Project /></div>
                    <View_projects 
                        cal={cal}
                        title={"Calculator App"}
                        des={"A sleek and user-friendly calculator application designed to help users efficiently manage their calculations."}
                    />

                    <View_projects 
                        cal={report}
                        title={"Weather App"}
                        des={"A weather forecasting application that provides accurate and up-to-date weather information for users worldwide."}
                    />

                    <View_projects 
                        cal={nandi}
                        title={"Nandi - Robo Soccer Bot"}
                        des={"An autonomous robot developed using ESP and sensors for Robo Soccer."}
                    />

                    <div className="exp">
                        <Exp />
                        <Exp_content title={"WiitzEnd"} description={"Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement"} due={"2023 - Present"} />

                        <Exp_content title={"GSSOC Contributor"} description={"Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal."} due={"2025"} />

                        <Exp_content title={"Real Skill"} description={"Volunteered in handling registration, technical support, and logistics. Contributed to the successful execution of the event."}  due={"2024"} />
                    </div>

                    <div className="tools">
                        <Tools />
                        <div className="tool_element">
                            <div className="tool1"><Tool_element image={vercel} title={"Vercel"} des={"Deployment"}/></div>
                            <div className="tool2"><Tool_element image={wordpress} title={"WordPress"} des={"Website Builder"}/></div>
                        </div>

                        <div className="tool_element">
                            <div className="tool1"><Tool_element image={figma} title={"Figma"} des={"Design Tool"}/></div>
                            <div className="tool2"><Tool_element image={frame} title={"React"} des={"Framework"}/></div>
                        </div>

                        <div className="tool_element">
                            <div className="tool1"><Tool_element image={arduino} title={"Arduino"} des={"Robotics"}/></div>
                            <div className="tool2"><Tool_element image={openai} title={"OpenAI"} des={"AI Assistant"}/></div>
                        </div>

                    </div>



                    <div className="contact_section"><Contact /><ContactForm/></div>
                    
                </div>
            </div>
        </>
    );
}

export default Body;