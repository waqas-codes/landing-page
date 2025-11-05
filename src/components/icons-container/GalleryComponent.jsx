import React from 'react'

const GalleryComponent = ({bgImage, title}) => {

  const image = {
    img : {bgImage}
  }
  return (
    <div>
      <div className="image" style={img}>

      </div>
    </div>
  )
}

export default GalleryComponent