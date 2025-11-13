import React from 'react'
import '../../App.css'
const GalleryComponent = ({ bgImage, title }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className='ind-image'
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        margin: '0',
        border: "1px solid white",
        width: '35%',
        height: '250px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='image'
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.3s ease',
          filter: isHovered ? 'brightness(0.7) sepia(0.5) hue-rotate(180deg)' : 'none',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            opacity: isHovered ? 1 : 0
          }}
        >
          <h3
            style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.3s ease'
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default GalleryComponent