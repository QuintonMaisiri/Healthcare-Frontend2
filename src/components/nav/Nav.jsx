import React from "react";
import "./Nav.css";

import Button from "../button/Button";

function Nav(){
    return(
        <nav>
            <div className="custom-col left-nav">
                <img src="./images/healthcare.png" id="logo" alt=""></img>
                <p>Healthcare</p>
            </div>
            <div className="custom-col right-nav">
                <div className="nav-links-container">
                    <ul>
                        <li className="nav-links"><a href="">Home</a></li>
                        <li className="nav-links"><a href="">About</a></li>
                        <li className="nav-links"><a href="">Find Doctor</a></li>
                        <li className="nav-links"><a href="">Testimonials</a></li>
                        <li className="nav-links"><a href="">Services</a></li>
                    </ul>
                </div>
                <div className="custom-col nav-signin-container">
                    <ul>
                        <Button 
                            link="#"
                            text="Signin" 
                            bg="transparent" 
                            color ="#ff9fb2" 
                            outline = {true}
                        />
                        <Button 
                            link="#"
                            text="Signup" 
                            bg="#ff9fb2" 
                            color ="white" 
                            outline = {false}
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav