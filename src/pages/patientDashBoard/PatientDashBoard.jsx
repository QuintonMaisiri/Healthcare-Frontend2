import React from 'react'
import "./PatientDashBoard.css"

import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/TopBar'
import DoctorInformationBar from '../../components/doctorInformationBar/DoctorInformationBar'
import PatientDashBoardContent from "../../components/patientDashBoardContent/PatientDashBoardContent"

function PatientDashBoard() {
  return (
   <div className='patient-dashboard'>
        <SideBar />
        <TopBar />
        <div className='dashboard-content'>
          <PatientDashBoardContent />
          <DoctorInformationBar />
        </div>
   </div>
  )
}

export default PatientDashBoard