import React from 'react'
import "./PatientDashBoardContent.css"
import PatientDashBoardDefault from "../patientDashboardDefault/PatientDashBoardDefault"
import PersonalInformation from '../personalInformation/PersonalInformation'
import RecordTable from '../recordTable/RecordTable'



function patientDashBoardContent() {
  return (
    <div className='patient-dashboard-content'>
      {/* <PatientDashBoardDefault /> */}
      {/* <PersonalInformation /> */}
      <RecordTable />
    </div>
  )
}

export default patientDashBoardContent