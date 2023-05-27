import React from 'react'
import "./Record.css"

function Record(props) {
  return (
    <div className='record'>
        <div className='record-heading-container'>
            <h2 className='record-heading'><i className='bi bi-file-earmark'></i></h2>
        </div>
        <p>{props.date}</p>
    </div>
  )
}

export default Record