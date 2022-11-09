import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productContext'


const About = () => {
    const { products, ...state } = useProductContext();
    const myData = {
        name: "MEGA E-MART"
    }
    return (
        <HeroSection myData={myData} />
    )
}

export default About