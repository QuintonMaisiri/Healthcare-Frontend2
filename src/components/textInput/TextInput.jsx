import React from 'react'
import "./TextInput.css"

function TextInput(props) {
  return (
    <input 
        placeholder={props.placeholder && props.placeholder}
        className='text-input'
        type={props.type && props.type}
    />
  )
}

export default TextInput