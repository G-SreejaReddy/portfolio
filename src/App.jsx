import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Internships from './Pages/Internships';
import Contact from './Pages/Contact';

function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Contact />
      <footer >
      <p>Designed and developed by  G Sreeja</p>
      <p>&copy; {new Date().getFullYear()}All rights reserved.</p>
    </footer>
      
    </>
  )
}

export default App
