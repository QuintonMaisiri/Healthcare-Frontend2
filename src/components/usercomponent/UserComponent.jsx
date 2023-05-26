import React from 'react'
import "./UserComponent.css"
import RoundedImg from '../roundedImg/RoundedImg'

function UserComponent(props) {
  return (
    <div className='user-component'>
        <RoundedImg 
          src={props.img}
        />
        <i className='bi bi-arrow'></i>
    </div>
  )
}

export default UserComponent