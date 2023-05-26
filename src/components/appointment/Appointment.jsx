import React from 'react'
import "./Appointment.css"
import RoundedImg from '../roundedImg/RoundedImg'

function Appointment(props) {
    return (
        <div className='appointment'>
            <div className='appointment-doctor'>
                <div className='doctor-name'>
                    <RoundedImg
                        src={props.img}
                        diameter="50px"
                    />
                   <div className='doctor-name-container'> <p>Dr.{props.doctor} <br /> <span id="doctor-job-title"> {props.doctorJobTitle}</span> </p></div>
                </div>
                <div className='appointment-time'>
                    <div>
                        <p><i className='bi bi-calendar-event'></i> {props.date}</p>
                    </div>
                    <div>
                        <p><i className='bi bi-clock'></i> {props.time}</p>
                    </div>
                    <div>
                        <p><i className='bi bi-geo-alt'></i>Physical Visit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment