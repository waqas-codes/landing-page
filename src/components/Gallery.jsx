import React from 'react'
import GalleryComponent from './icons-container/GalleryComponent'

const Gallery = () => {
  return (
    <div>
      <div className="text-container">
        <h1>GALLERY</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
      </div>
      <GalleryComponent
        bgImage="https://img.freepik.com/free-photo/high-angle-man-holding-smartphone_23-2149936204.jpg?semt=ais_hybrid&w=740&q=80"
        title="PROJECT TITLE"
      />
    </div>
  )
}

export default Gallery