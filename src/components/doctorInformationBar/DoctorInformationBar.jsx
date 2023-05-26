import React from 'react'
import "./DoctorInformationBar.css"

import RoundedImg from "../roundedImg/RoundedImg"
import StatisticBox from "../statisticbox/StatisticBox"
import Button from "../button/Button"

function DoctorInformationBar() {
  return (
    <div className='doctor-information-bar'>
      <div className='doctor-profile'>
        <RoundedImg
          src="/images/about.jpg"
          diameter="80px"
        />
        <p id='name'> Dr. Quinton Maisiri <br /> <span id="doctor-job-title">Dentist</span></p>
      </div>
      <div className='doctor-info-container'>
          <StatisticBox
            heading="from $50"
            headingSize="12pt"
            explain="price"
            explainSize="10pt"
            height="80px"
            width="100px"
          />
          <StatisticBox
            heading="8 years"
            headingSize="12pt"
            explain="experience"
            explainSize="10pt"
            height="80px"
            width="100px"
          />
          <StatisticBox
            heading="500"
            headingSize="12pt"
            explain="patients"
            explainSize="10pt"
            height="80px"
            width="100px"
          />
      </div>
      <div>
        <h4>Biography</h4>
        <p id='biography'>
        Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.
        </p>
      </div>
      <Button 
        text="Make Appointment"
        bg = "#535353"
        color = "white"
        outline = {false}
        width = "310px"
        radius = "0"
      />
    </div >
  )
}

export default DoctorInformationBar