import React from 'react'
import "./Doctor.css"
import DoctorProfile from '../../components/doctorProfile/DoctorProfile'

function Doctor() {
  return (
    <div className='doctor'>
        <div className='doctor-heading-container'>
        <h1 className='doctor-heading'> Need Treatment. <br />Choose A Doctor</h1>
        <p>Discover the best team of doctors we have</p>
        </div>
        <div className='doctor-profile-container'>
            <DoctorProfile 
                img = "/images/about.jpg"
                name ="Quinton Maisiri"
                title ="Doctor"
                patients ="200"
                experience = "5 Years"
                price ="From $20"
            />
        </div>
    </div>
  )
}

export default Doctor