import React from 'react'
import "./TopBar.css"
import UserComponent from '../usercomponent/UserComponent'

function TopBar() {
  return (
    <div className='topbar'>
        <UserComponent 
            img="/images/about.jpg"
        />        
    </div>
  )
}

export default TopBar