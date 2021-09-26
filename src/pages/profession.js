import React from "react";
import Map from "./map";
import User from "../assests/user.jpeg";
import "../styles/profession.css"

function profession() {
  return (
    <div className="container">
      <div className="profession">
        <span>
          <h1>PROFESSION</h1>
        </span>
      </div>
      <div className="fashion">
        <span>
          <h2>Fashion Designer</h2>
        </span>
      </div>
      <div className="main">
        <div className="row">

        
        <a href="default.asp" target="_blank">
          
          <div className="profile1">
            
            <img className="img1" src={User} alt=""/>
           
             <div className="person"><b>Amelia Earhart</b></div>
        
          </div></a>

          <a href="default.asp" target="_blank">
          <div className="profile1">
            
            <img className="img1" src={User} alt=""/>
           
             <div className="person"><b>Amelia Earhart</b></div>
        
          </div></a>

          <a href="default.asp" target="_blank">
          <div className="profile1">
            
            <img className="img1" src={User} alt=""/>
           
             <div className="person"><b>Amelia Earhart</b></div>
        
          </div></a>

          <a href="default.asp" target="_blank">
          <div className="profile1">
            
            <img className="img1" src={User} alt=""/>
           
             <div className="person"><b>Amelia Earhart</b></div>
        
          </div></a>
      </div>

     <div className="map">
     <Map/>
     </div>
  </div>
    </div>
  
  
  );
}

export default profession;