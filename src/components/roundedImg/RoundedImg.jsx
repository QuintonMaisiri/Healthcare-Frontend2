import React from 'react'

function RoundedImg(props) {
  return (
    <img 
        alt=''
        src={props.src} 
        className='user'
        style={
            {
                width: props.diameter ? props.diameter : "50px",
                height: props.diameter ? props.diameter : "50px",
                borderRadius: "50%"
            }
        }
        ></img>
  )
}

export default RoundedImg