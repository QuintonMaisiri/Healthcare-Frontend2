import React from "react";

import "./Overlay.css"

function Overlay(props){
    return (
        <div className="overlay" style={{backgroundColor: props.color}}></div>
    )
}

export default Overlay