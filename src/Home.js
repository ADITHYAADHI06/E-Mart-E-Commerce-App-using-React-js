import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from "./components/Trusted"
import Service from "./components/FeatureProduct"


const Home = () => {
  const myData = {
    name: "E-MART SHOP"
  }
  return (
    <>
      <HeroSection myData={myData} />
      <Service />
      <Services />
      <Trusted />
    </>
  );

}

export default Home