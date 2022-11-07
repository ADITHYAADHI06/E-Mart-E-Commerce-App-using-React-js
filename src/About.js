import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
    const myData = {
        name: "MEGA E-MART"
    }
    return (
        <HeroSection myData={myData} />
    )
}

export default About