import React, { useState } from "react";
import '../index.css';

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "+918521123026"; // e.g. 919876543210

    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <form className="contactform" onSubmit={sendToWhatsApp}>
      <div className="contactform1">
        <div className="contactperson">
          <label>Name</label>
          <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="contactperson">
          <label>Email</label>
          <input 
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="contactmessage">
        <label>Message</label>
        <textarea
          placeholder="Your thoughts matter… Type here!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="btn">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default Contactform;
