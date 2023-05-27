import React from 'react'
import "./PersonalInformation.css"
import TextInput from '../textInput/TextInput'
import Button from "../button/Button"

function PersonalInformation() {
    return (
        <div>
            <h2>What We Know. <br /> About You.</h2>
            <div className='signup-container'>
                <div className='signup-form-container'>
                    <form>
                        <div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Firstname(s)"
                                    marginRight="100px"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Lastname"
                                    marginRight="100px"
                                />
                            </div>
                        </div>
                        <div >
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Email"
                                    marginRight="100px"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Phone number"
                                    marginRight="100px"
                                />
                            </div>
                        </div>
                        <div >
                            <div className='input-container'>
                                <TextInput
                                    placeholder="National ID"
                                    marginRight="100px"
                                />
                            </div>
                        </div>
                        <h4>Next of Kin:</h4>
                        <div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Firstname(s)"
                                    marginRight="100px"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Lastname"
                                    marginRight="100px"
                                />
                            </div>
                        </div>
                        <div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Email"
                                    marginRight="100px"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Phone number"
                                    marginRight="100px"
                                />
                            </div>
                        </div>
                    </form>
                    <Button
                        text="Change password"
                        bg="#535353"
                        outline={false}
                        color="white"
                        radius="0"
                        width="250px"
                    />
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation