import React from 'react'
import GalleryComponent from './icons-container/GalleryComponent'

const Gallery = () => {
  return (
    <div className='gallery-images'>
      <div className="text-container">
        <h1>GALLERY</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
      </div>
      <div className='gallery-box'>
        <GalleryComponent
          bgImage="https://img.freepik.com/free-photo/high-angle-man-holding-smartphone_23-2149936204.jpg"
          title="PROJECT TITLE"
        />
        <GalleryComponent
          bgImage="https://media.istockphoto.com/id/916184580/photo/man-working-on-laptop-placed-on-white-desk.jpg?s=612x612&w=0&k=20&c=60InyBgQmNnz7AHrCSrefs9MbWnDUp444fDOMk2cG0U="
          title="PROJECT TITLE"
        />
        <GalleryComponent
          bgImage="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNziCkQfokyQuIXzz8G2-tKIYI4A_1ToZyR9CNGn82Cn-wz75u"
          title="PROJECT TITLE"
        />
      </div>
      <div className='gallery-box'>
        <GalleryComponent
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FoENOAljC1qVNR57NIDR8w4y1lPeJbA2hg&s"
          title="PROJECT TITLE"
        />
        <GalleryComponent
          bgImage="https://media.gettyimages.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=612x612&w=gi&k=20&c=a8rqpDUIoa4p2kVVd-craFtRLa8WQHz-Ill2HeeDyhk="
          title="PROJECT TITLE"
        />
        <GalleryComponent
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczKIGRV1he1n2LdMzW1Z9WrVxck4cpduecg&s"
          title="PROJECT TITLE"
        />
      </div>
      <div className='gallery-box'>
        <GalleryComponent
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XZJFewMlJotf6zHeGv_YxolbKehyYC1OuHvCMaQMlc9sScxLwZDRgMxqMrUxE0jhh5s&usqp=CAU"
          title="PROJECT TITLE"
        />
        <GalleryComponent
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvF6FcB2UiXYQQ-w0CKHAFxIGma-v5PM1KIcub39c8dA_rBuCIpfgp8FxEO126GVXhw6w&usqp=CAU"
          title="PROJECT TITLE"
        />
        <GalleryComponent
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJ64bHXVA4tybzy1RTz08HwzcxD-AnDhGvcovZsOhssGiEiLS_YLSuu8PAGgIxWrQD9I&usqp=CAU"
          title="PROJECT TITLE"
        />
      </div>
    </div>
  )
}

export default Gallery