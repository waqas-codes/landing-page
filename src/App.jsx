import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feature from './components/Feature'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Gallery from './components/Gallery'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Feature />
      <Aboutus />
      <Services />
      <Gallery />
      
    </div>
  )
}

export default App