import React from 'react'
import "./VisitBox.css"

function VisitBox(props) {
  return (
    <div className='visit-box'>
        <div className='icon-container'>
            <h1 className='visit-icon'> <i style={{color:props.color}}className={props.icon}></i></h1>
        </div>
        <div className='visit-status-container'><p>{props.status} <br /><span>{props.value}</span></p></div>
    </div>
  )
}

export default VisitBox