import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './WelcomeSection.css'

function WelcomeSection() {
  return (
  <>
  <div id='home' className='welcome-container'>
        <h1>Hey,</h1>
        <TypeAnimation
            sequence={[
                'I\'m Gilbert Co.',
                1000,
                'I\'m Software Engineer.',
                1000,
                'I\'m Web Developer.',
                1000,
                'I\'m Freelancer.',
                1000
            ]}
            speed={200}
            repeat={Infinity}
        />
        <p>Based in Al ain, Abu Dhabi</p>
        <i className='fa fa-chevron-down'></i>
    </div>
    </>
  )
}
export default WelcomeSection