import React from 'react'
import IconCard from './icons-container/IconCard'

const Feature = () => {
  return (
    <div className='feature-section'>
        <h1>FEATURES</h1>
        <div className="icons-container">
            <IconCard 
            icon="fa-regular fa-comments"
            detail="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
            />
            <IconCard 
            icon="fa fa-bullhorn"
            detail="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
            />
            <IconCard 
            detail="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
            />
            <IconCard 
            icon="fa fa-magic"
            detail="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
            />
        </div>
    </div>
  )
}

export default Feature