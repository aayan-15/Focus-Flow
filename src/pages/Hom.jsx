import React from 'react'
import FloatingNavbar from '../components/FloatingNav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowitWorks from '../components/HowitWorks'
import CTA from '../components/CTA'
import Footer from '../components/Footer'


const Hom = () => {
  return (
    <div>
        <div><FloatingNavbar/></div>
        
        <main>
        <Hero />
        <Features />
        <HowitWorks />
        <CTA />
      </main>
      <Footer />
      

    </div>
  )
}

export default Hom
