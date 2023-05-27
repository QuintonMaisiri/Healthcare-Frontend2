import React from 'react'
import "./DoctorProfile.css"
import RoundedImg from '../roundedImg/RoundedImg'

function DoctorProfile(props) {
    return (
        <div className='doctor-profile'>
            <div className='left-doctor-profile'>
                <RoundedImg 
                    src={props.img}
                    diameter = "80px"
                />
                <h4 className='doctor-profile-heading'>{props.name}</h4>
                <p>{props.title}</p>
            </div>
            <div className='right-doctor-profile'>
                <p className='doctor-profile-stat'>Patients <br /> <span>{props.patients}</span></p>
                <p className='doctor-profile-stat'>Experience<br /> <span>{props.experience}</span></p>
                <p className='doctor-profile-stat'>Price <br /> <span>{props.price}</span></p>
            </div>
        </div>
    )
}

export default DoctorProfile