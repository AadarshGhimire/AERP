import React from 'react'
import NavBar from '../components/Navigation/NavBar.jsx'
import Hero from '../components/Resources/Hero.jsx'
import Resources from '../components/Resources/Resources.jsx'
import Footer from '../components/Navigation/Footer.jsx'
export default function ResourcesPage() {
  return (
    <div className='animate-drop'>
        <NavBar />
        <Hero />
        <Resources />
        <Footer />
    </div>
  )
}
