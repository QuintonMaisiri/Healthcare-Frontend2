import React from 'react'
import "./SideBar.css"

import SideBarComponent from '../sidebarComponent/SideBarComponent'

function SideBar(props) {
  return (
   <div className="sidebar">
        <div className='logo-container'>
            <img src='images/healthcare.png' id='logo' alt=''></img>
            <p>healthcare</p>
        </div>
        <div className='sidebar-components-container'>
            <SideBarComponent 
                icon ="bi bi-person"
                text = "personal information"
                link = ""
            />
            <SideBarComponent 
                icon ="bi bi-calendar"
                text = "schedules"
                link = ""
            />
            <SideBarComponent 
                icon ="bi bi-book"
                text = "my records"
                link = ""
            />
        </div>
   </div>
  )
}

export default SideBar