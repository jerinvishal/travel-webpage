import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white py-8'>
      <div className='container mx-auto px-4' >
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <h2 className='text-2xl font-bold mb-4'>Travell Agency </h2>
          <p className='mb-4'>
            Trust your unforgettable travel experience.Explore the world With us.
          </p>
        </div>
        <div className='flex flex-col mb-4'>
          <h2 className='text-lg font-semibold'> QUICK LINKS</h2>
          <div className="flex flex-col mt-4 space-y-2">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
        <div>
          <h3 className='text-lg font-semibold'> Follow Us </h3>
          <div  className="flex  space-x-4 mb-4">
            <FaFacebookF className='text-blue-500 hover:text-blue-600'/>
            <FaInstagram   className='text-blue-500 hover:text-blue-600'/>
            <FaTwitter   className='text-blue-400 hover:text-blue-500'/>
            <FaYoutube  className='text-blue-500 hover:text-blue-600'/>
          </div>
        </div>
        </div>
        <div>
          <p>&copy; 2024 Travel Agency. All rights reserved. </p>
          <div className='flex justify-between border border-t border-gray-700 pt-4'>
            <Link to=" ">Privacy Policy</Link>
            <Link to=" ">Terms Of Services</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer