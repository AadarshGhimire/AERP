import React from 'react'
import NavBar from '../components/Navigation/NavBar.jsx'
import Footer from '../components/Navigation/Footer.jsx'
import Hero from '../components/Store/Hero.jsx'
import Store from '../components/Store/Store.jsx'
export default function StorePage() {
  return (
    <div className='animate-drop'>
        <NavBar />
        <Hero />
        <Store />
        <Footer />
    </div>
  )
}
