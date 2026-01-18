import React from 'react'
import NavBar from '../components/Navigation/NavBar.jsx'
import Hero from '../components/About/Hero.jsx'
import OurStory from '../components/About/OurStory.jsx'
import PurposeVisionValues from '../components/About/PurposeVisionValues.jsx'
import Principles from '../components/About/Principles.jsx'
import OurApproach from '../components/About/OurApproach.jsx'
import Footer from '../components/Navigation/Footer.jsx'
export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <OurStory />
      <PurposeVisionValues />
      <Principles />
      <OurApproach />
      <Footer />
    </div>
  )
}


