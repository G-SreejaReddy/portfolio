import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Internships from './Pages/Internships';
import Contact from './pages/Contact';

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
