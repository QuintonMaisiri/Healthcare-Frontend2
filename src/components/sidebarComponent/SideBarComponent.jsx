import React from 'react'
import "./SideBarComponent.css"

function SideBarComponent(props) {
    return (
        <div className='sideBarComponent'>
            <a href={props.link} className='sidebar-links'>
                <i className={props.icon}></i>
                <p>{props.text}</p>
            </a>
        </div>
    )
}

export default SideBarComponent