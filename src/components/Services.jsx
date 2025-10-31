import React from 'react'
import IconCard from './icons-container/IconCard'

const Services = () => {
  return (
    <div className='services'>
        <div className="top-text">
            <h1>OUR SERVICES</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div className="icon-container">
            <IconCard />
            <IconCard />
            <IconCard />
            <IconCard />
            <IconCard />
            <IconCard />
        </div>
    </div>
  )
}

export default Services