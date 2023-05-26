import React from "react";
import Nav from "../nav/Nav";
import Overlay from "../overlay/Overlay";
import Button from "../button/Button";
import StatisticBox from "../statisticbox/StatisticBox";
import "./Header.css";

function Header(){
    return(
        <header >
            <Overlay color="#00000098"/>
            <Nav />
            <div className="hero">
                <div className="left-hero">
                    <h1 className="heroHeading"><span className="outline"> Find Your </span> Doctor</h1>
                    <p>Make an Apponintment with your favourite doctor at Healthcare all in the comfort of your home </p>
                    <div className="hero_btn_container">
                        <Button 
                            link="#"
                            text="Make Apponintment Now" 
                            bg ="#ff9fb2" 
                            color ="#535356" 
                            outline = {false}
                        />
                        <Button 
                            link="#"
                            text="Find Doctor" 
                            bg="#ff9fb2" 
                            color ="#ff9fb2" 
                            outline = {true}
                        />
                    </div>
                </div>
                <div className="right-hero">
                    <StatisticBox 
                        heading="20+"
                        explain="Number Of Doctors"
                        color ="#ff9fb2"
                        bg = "#535356"
                    />
                    <StatisticBox 
                        heading="500+"
                        explain="Number Of Patients Treated"
                        color ="#ff9fb2"
                        bg = "#535356"
                    />
                    <StatisticBox 
                        heading="100+"
                        explain="Open Slots"
                        color ="#ff9fb2"
                        bg = "#535356"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header