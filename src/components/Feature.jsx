import React from 'react'
import IconCard from './icons-container/IconCard'

const Feature = () => {
  return (
    <div className='feature-section'>
        <h1>FEATURES</h1>
        <div className="icons-container">
            <IconCard 
            icon="fa-regular fa-comments"
            />
            <IconCard 
            icon="fa fa-bullhorn"
            />
            <IconCard />
            <IconCard 
            icon="fa fa-magic"
            />
        </div>
    </div>
  )
}

export default Feature