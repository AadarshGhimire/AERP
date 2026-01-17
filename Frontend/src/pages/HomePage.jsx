import React from 'react'
import NavBar from '../components/Navigation/NavBar.jsx'
import Hero from '../components/Home/Hero.jsx'
import WhyChooseUs from '../components/Home/WhyChooseUs.jsx'
import HeritageOfExcellence from '../components/Home/HeritageOfExcellence.jsx'
import IndustriesWeServe from '../components/Home/IndustriesWeServe.jsx'
export default function HomePage() {
  return (
    <div>
    <NavBar />
    <Hero />
    <WhyChooseUs />
    <HeritageOfExcellence />
    <IndustriesWeServe />
    </div>
  )
}

