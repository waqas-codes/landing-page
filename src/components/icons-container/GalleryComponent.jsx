import React from 'react'

const GalleryComponent = ({bgImage, title}) => {

    const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "374px",
    height: "136px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", // text color on image
    textShadow: "0 2px 5px rgba(0,0,0,0.6)"
  }
  return (
    <div>
      <div className="image" style={sectionStyle}>
pa
      </div>
    </div>
  )
}

export default GalleryComponent