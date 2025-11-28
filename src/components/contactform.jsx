import React from "react";
import '../index.css';


function Contactform() {
  return (<>
    <div className="contactform">
      <div className="contactform1">
        <div className="contactperson">
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>

        <div className="contactperson">
          <label>Email</label>
          <input type="text" placeholder="Email ID" />
        </div>
      </div>

      <div className="contactmessage">
        <label>Message</label>
        <input type="textarea" placeholder="Your thoughts matter… Type here!" />
      </div>

      <div className="btn">
      <button type="submit">Send</button>

      </div>
    </div>

  </>);
}

export default Contactform;