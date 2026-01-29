import React from 'react'
import NavBar from '../components/Navigation/NavBar.jsx'
import Footer from '../components/Navigation/Footer.jsx'
import Hero from '../components/Services/Hero'
import GoalsApproach from '../components/Services/GoalsApproach.jsx'
export default function ServicesPage() {
  return (
    <div className='animate-drop'>
      <NavBar />
      <Hero />
      <GoalsApproach />
      <Footer />
    </div>
  )
}

