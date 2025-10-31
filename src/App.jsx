import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feature from './components/Feature'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Feature />
      <Aboutus />
      <Services />
    </div>
  )
}

export default App