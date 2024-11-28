import React from 'react'
import heroimage from '../assets/hero.png'
import gal1 from '../assets/gal1.jpg'
import gal2 from '../assets/gal2.jpg'
import gal3 from '../assets/gal3.png'
import gal4 from '../assets/gal4.jpg'
import gal5 from '../assets/gal5.webp'
import gal6 from '../assets/gal6.webp'

const images=[
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
]


const Gallery = () => {
  return (
    <div className="">
    <div
    className="relative h-96 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroimage})` }}
  >
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h3 className="text-4xl md:text-6xl font-bold text-white">Gallery</h3>
       
      </div>
  </div>
  <div className="container mx-auto px-4 py-12">
    <div className="grid gap-6 grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
    {images.map((image)=>
    <div className="rounded-lg overflow-hidden shadow-md transform translate duration-100 hover:scale-105">
        <img src={image} alt="" className='w-full h-full object-cover' />
    </div>
    )}
    </div>
  </div>
</div>
  )
}

export default Gallery