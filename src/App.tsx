import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import ServicesSection from './components/Services/ServicesSection'
import AboutSection from './components/AboutUs/AboutSection'
import TeamSection from './components/Team/TeamSection'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      
        <Navbar/>
       <HeroSection/>
    <ServicesSection/>
    <AboutSection/>
    <TeamSection/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
