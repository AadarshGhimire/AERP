import React from 'react'
import NavBar from '../components/Navigation/NavBar.jsx'
import Hero from '../components/Home/Hero.jsx'
import WhyChooseUs from '../components/Home/WhyChooseUs.jsx'
import HeritageOfExcellence from '../components/Home/HeritageOfExcellence.jsx'
import IndustriesWeServe from '../components/Home/IndustriesWeServe.jsx'
import Contact from '../components/Home/Contact.jsx'
import Footer from '../components/Navigation/Footer.jsx'
export default function HomePage() {
  return (
    <div>
    <NavBar />
    <Hero />
    <IndustriesWeServe />
    <WhyChooseUs />
    <HeritageOfExcellence />
    <Contact />
    <Footer />
    </div>
  )
}

