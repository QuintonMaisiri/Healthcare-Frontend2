import React from "react";

import "./StatisticBox.css";

function StatisticBox(props){
    return (
        <div 
            className="statisticBox" 
            style={
                {
                    backgroundColor: props.bg,
                    color: props.color,
                    width: props.width ? props.width : "140px" ,
                    height: props.height ? props.height : "140px" 
                }
            }
        >
            <h2 
                style={
                    {
                        fontSize: props.headingSize && props.headingSize
                    }
                }
            >{props.heading}</h2>
            <p
                style={
                    {
                        fontSize: props.explainSize && props.explainSize
                    }
                }
            >{props.explain}</p>
        </div>
    )
}

export default StatisticBox