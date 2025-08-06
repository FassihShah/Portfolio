import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
