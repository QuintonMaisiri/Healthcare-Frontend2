import React from 'react';
import Button from '../button/Button';
import "./About.css";

function About() {
  return (
    <div className='about'>
    <div className='left-about'>
        <p>About us</p>
        <h1 className='aboutHeading'>Get To Know Us Better</h1>
      </div>
      <div className='right-about'>
        <img src='/images/about.jpg' className='about-img' alt=''></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis magni quos adipisci ratione architecto iure aspernatur, excepturi repudiandae eaque laudantium, similique rem debitis alias ad modi accusantium a. Magnam.</p>
        <Button 
          text="Work With Us"
          color = "white"
          bg = "#00635d"
          outline = {false}
        />
      </div>
    </div>
  )
}

export default About