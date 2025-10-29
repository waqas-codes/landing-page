import React from 'react'
import IconCard from './icons-container/IconCard'

const Feature = () => {
  return (
    <div className='feature-section'>
        <h1>FEATURES</h1>
        <div className="icons-container">
            <IconCard />
            <IconCard />
            <IconCard />
            <IconCard />
        </div>
    </div>
  )
}

export default Feature