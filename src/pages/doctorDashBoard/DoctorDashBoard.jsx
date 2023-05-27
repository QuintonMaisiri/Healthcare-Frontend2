import React from 'react'
import "./DoctorDashBoard.css"
import TopBar from '../../components/topbar/TopBar'
import VisitBox from '../../components/visitBox/VisitBox'
import RecordTable from '../../components/recordTable/RecordTable'

function DoctorDashBoard() {
    return (
        <div className='doctor-dashboard'>
            <TopBar />
            <div className='doctor-dashboard-content'>
                <div className='visitbox-container'>
                    <VisitBox
                        icon="bi bi-hourglass-split"
                        value="10"
                        status="Waiting Visits"
                    />
                    <VisitBox
                        icon="bi bi-x-circle-fill"
                        value="3"
                        status="Canceled Visits"
                        color="red"
                    />
                    <VisitBox
                        icon="bi bi-check-square-fill"
                        value="10"
                        status="Done Visits"
                        color="green"
                    />
                </div>

                <div>
                    <RecordTable />
                </div>
            </div>
        </div>
    )
}

export default DoctorDashBoard