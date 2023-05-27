import React from 'react'
import "./Password.css"
import TextInput from '../../components/textInput/TextInput'
import Button from '../../components/button/Button'
import RoundedImg from '../../components/roundedImg/RoundedImg'

function Password() {
    return (
        <div className='password'>
            <div className='left-password-container'>
                <RoundedImg
                    src="/images/about.jpg"
                    diameter="100px"
                />
                <div className='password-content'>
                    <TextInput
                        placeholder="Enter Current Password"
                        type="password"
                    />
                    <div>
                        <TextInput
                            placeholder="Enter New Password"
                            type="password"
                        />
                        <TextInput
                            placeholder="Confirm New Password"
                            type="password"
                        />
                    </div>
                    <Button
                        text="Change Password"
                        outline={false}
                        bg="#535353"
                        color="white"
                        radius="0"
                        marginTop="20px"
                    />
                </div>
            </div>
            <div className='right-password-container'>
                <h1>Need A New Password. <br /> Just Fill In The Form</h1>
                <p>You can change your password anytime you feel it is not secure</p>
            </div>
        </div>
    )
}

export default Password