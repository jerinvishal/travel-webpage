import React from 'react'
import heroimage from '../assets/hero.png'
import { FaEnvelope, FaMap, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'


const About = () => {
  return (
    <div className='bg-gray-100 '>
         <div
    className="relative h-96 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroimage})` }}
  >
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h3 className="text-4xl md:text-6xl font-bold text-white">About</h3>
       
      </div>
  </div>

  <div className='container mx-auto px-4 py-12 '>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
            <img src={heroimage} alt="" className='rounded-lg shadow-md w-full h-auto'/>
        </div>
        <div className=" flex flex-col justify-center">
            <h3 className='text-2xl font-bold mb-4 '>
                 Who We Are 
            </h3>
            <p className='text-gray-700 mb-4'>We are a passionate travel agency committed to providing the best travel experiences
               for our clients. Our team of dedicated professionals works tirelessly to ensure your
               trips are seamless and unforgettable.</p>
            <h3 className='text-2xl font-bold mb-4 '>Our Mission</h3>
            <p className='text-gray-700 mb-4'>
            Our mission is to create amazing travel experiences that inspire and enrich the lives of
            our clients. We believe in personalized service, attention to detail, and providing
            exceptional value.
            </p>
            
        </div>
    </div>
  </div>

    </div>
  )
}

export default About