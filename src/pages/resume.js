import React from 'react'
import './resume.css'
import User from '../assests/user.jpeg'

const resume = () => {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="person"><b>Amelia Earhart</b></div>
                    </div>
                    
                    <div className="main">
                        <div className="resume">
                            
                        </div>

                        <div className="profile">
                              
                                      <img className="pic" src={User} alt="" />
                                

                                <div className="data">

                                </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default resume

