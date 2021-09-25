import React from "react";
import Register from "../assets/register.jpg";
import "../styles/Job.css";

function Registers() {
  return (
    <div className="register">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Register})` }}
      ></div>
      <div className="rightSide">
        <h1> REGISTER HERE!</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter Full name..." type="text" />
          <label htmlFor="profession">Profession</label>
          <input name="profession" placeholder="Enter your Profession..." type="text" />
          <label htmlFor="message">Attach your Resume/Documents Proof</label>
          
          <button type="submit"> SUBMIT</button>
          <button type="submit"> SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}

export default Registers;
