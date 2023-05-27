import React from 'react'
import "./MakeAppointment.css"
import RoundedImg from '../../components/roundedImg/RoundedImg'
import Button from '../../components/button/Button'

function MakeAppointment() {
    return (
        <div>
            <div className='make-appointment-container'>
                <h1>Make An Appointment</h1>
                <div>
                    <RoundedImg
                        src="/images/hero.jpg"
                        diameter="100px"
                    />
                    <h2>Dr. Simbarashe Gangayi</h2>
                    <p style={{ textAlign: "center" }}>Neurosurgeon</p>
                </div>
                <div>
                    <form>
                        <select class="form-select">
                            <option selected >Select Most Appropriate Time For Visit</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </form>
                    <Button
                            text="Next"
                            outline={false}
                            bg="#535353"
                            color="white"
                            width="100px"
                            radius="0"
                            margin="10px"
                        />
                </div>
            </div>
        </div>
    )
}

export default MakeAppointment