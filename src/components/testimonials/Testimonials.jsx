import React from 'react'
import Carousel from '../carousel/Carousel'

import "./Testimonials.css"

function Testimonials() {
    return (
        <div className='testimonials'>
            <div className='left-testimonials'>
                <Carousel />
            </div>
            <div className='right-testimonials'>
                <p>Testimonials</p>
                <h1 className='aboutHeading'>What They Say About Our Services</h1>
            </div>
        </div>
    )
}

export default Testimonials