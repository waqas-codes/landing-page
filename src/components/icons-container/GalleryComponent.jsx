import React from 'react'

const GalleryComponent = ({ bgImage, title }) => {
  const styles = {
    galleryItem: {
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      margin: '10px'
    },
    image: {
      width: '30%',
      height: '270px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'all 0.3s ease',
      backgroundImage: `url(${bgImage})`
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      opacity: 0
    },
    title: {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      transform: 'translateY(20px)',
      transition: 'all 0.3s ease'
    },
    hoverImage: {
      filter: 'brightness(0.7) sepia(0.5) hue-rotate(180deg)',
      transform: 'scale(1.05)'
    },
    hoverOverlay: {
      background: 'rgba(0, 0, 0, 0.5)',
      opacity: 1
    },
    hoverTitle: {
      transform: 'translateY(0)'
    }
  }

  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div 
      className="gallery-item"
      style={styles.galleryItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="image" 
        style={{
          ...styles.image,
          ...(isHovered && styles.hoverImage)
        }}
      >
        <div 
          className="overlay"
          style={{
            ...styles.overlay,
            ...(isHovered && styles.hoverOverlay)
          }}
        >
          <h3 
            className="title"
            style={{
              ...styles.title,
              ...(isHovered && styles.hoverTitle)
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