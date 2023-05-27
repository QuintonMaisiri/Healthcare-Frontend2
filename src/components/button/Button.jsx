import React from "react";

import "./Button.css";

function Button(props){
    return(
        <button className="btn custom-btn"
            style={
                {
                    backgroundColor: props.outline ? "transparent" : props.bg ,
                    borderColor: props.outline ? props.bg : "transparent",
                    borderRadius: props.radius && props.radius,
                    width: props.width && props.width,
                    marginTop: props.marginTop
                }
                
            }
        >
            <a href={props.link}
                style={
                    {
                        color: props.color ? props.color : "black"
                    }
                }
            >
                {props.text}
                {props.img && <img className="arrow" src={props.img} alt="" ></img>}
            </a>
        </button>
    )
}

export default Button