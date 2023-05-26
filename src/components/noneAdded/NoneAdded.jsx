import React from 'react'
import "./NoneAdded.css"

function NoneAdded(props) {
  return (
    <div className='noneAdded'
        style={{
            backgroundColor: props.bg && props.bg
        }}
    >
        <p>It seems you do not have any {props.text}(s) yet</p>
    </div>
  )
}

export default NoneAdded