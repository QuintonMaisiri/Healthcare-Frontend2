import React from 'react'
import "./PatientDashBoardContent.css"
import Appointment from '../appointment/Appointment'
import NoneAdded from '../noneAdded/NoneAdded'

function patientDashBoardContent() {
  return (
    <div className='patient-dashboard-content'>
      <h2>Gd Morning,<br />Quinton</h2>
      <div className='appointment-section-container'>
        <h4 id='appointment-heading'>My Appointments:</h4>
        <div className='appointment-section'>
          <Appointment
            doctor="Quinton Maisiri"
            doctorJobTitle="Dentist"
            img="/images/about.jpg"
            date="26 May"
            time="12.00 am - 1.00 pm"
          />
          <Appointment
            doctor="Quinton Maisiri"
            doctorJobTitle="Dentist"
            img="/images/about.jpg"
            date="26 May"
            time="12.00 am - 1.00 pm"
          />
          <Appointment
            doctor="Quinton Maisiri"
            doctorJobTitle="Dentist"
            img="/images/about.jpg"
            date="26 May"
            time="12.00 am - 1.00 pm"
          />
        </div>
      </div>

      <div className='records-section-container'>
        <h4 id="record-heading">My Records:</h4>
        <div className='record-section'>
          <NoneAdded 
            text = "Records"
          />
        </div>
      </div>
    </div>
  )
}

export default patientDashBoardContent