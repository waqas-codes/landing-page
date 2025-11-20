import React from 'react'
import styles from './Gallery.module.css';

const GalleryComponent = ({bgImage, title}) => {

  return (
    <div>
      <div className="image" style={{backgroundImage:bgImage}}>

      </div>
    </div>
  )
}

export default GalleryComponent