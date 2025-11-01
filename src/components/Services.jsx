import React from 'react'
import IconCard from './icons-container/IconCard'

const Services = () => {
  return (
    <div className='services'>
      <div className="top-text">
        <h1>OUR SERVICES</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
      </div>
      <div className="main-container">
        <div className="icon-container">
          <IconCard
            icon="fa fa-cart-arrow-down"
          />
          <IconCard
            icon='fa fa-cloud-download'
          />
          <IconCard
            icon='fa fa-language'
          />
        </div>
        <div className='icon-container'>
          <IconCard
            icon='fa fa-language'
          />
          <IconCard
            icon='fa fa-pie-chart'
          />
          <IconCard
            icon='fa fa-cart-arrow-down'
          />
        </div>
      </div>
    </div>
  )
}

export default Services