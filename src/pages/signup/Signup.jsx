import React from 'react'
import "./Signup.css"


import TextInput from '../../components/textInput/TextInput'
import Button from '../../components/button/Button'
function Signup() {
    return (
        <div className='signup'>
            <h1>
                Fill the Form. <br />
                It's easy.
            </h1>
            <div className='signup-container'>
                <div className='signup-form-container'>
                    <form>
                        <div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Firstname(s)"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Lastname"
                                />
                            </div>
                        </div>
                        <div >
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Email"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Phone number"
                                />
                            </div>
                        </div>
                        <div >
                            <div className='input-container'>
                                <TextInput
                                    placeholder="National ID"
                                />
                            </div>
                        </div>
                        <div >
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Password"
                                    type="password"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Confirm Password"
                                    type="password"
                                />
                            </div>
                        </div>
                        <h4>Next of Kin:</h4>
                        <div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Firstname(s)"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Lastname"
                                />
                            </div>
                        </div>
                        <div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Email"
                                />
                            </div>
                            <div className='input-container'>
                                <TextInput
                                    placeholder="Phone number"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div id='join-container'>
                    <h2>Join Our <br />Community</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis maxime!</p>
                    <Button 
                        text="Register"
                        outline ={false}
                        color ="white"
                        bg = "#ff9fb2"
                        radius = "0"
                        width ="150px"
                    />
                </div>
            </div>

        </div>
    )
}

export default Signup