import React from 'react'
import heroimage from '../assets/hero.png'
import { FaEnvelope, FaMap, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-100 '>
         <div
    className="relative h-96 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroimage})` }}
  >
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h3 className="text-4xl md:text-6xl font-bold text-white">Contact</h3>
       
      </div>
  </div>
 <div className='container mx-auto px-4 py-12'>
 <div  className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
    <div className='bg-white  rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-bold mb-4 '>Contact Details</h3>
      <div className='flex items-center mb-4'>
        <FaEnvelope  className='text-blue-500 mr-2'/>
        <p>info@travelagency.net</p>
      </div>
      <div className='flex items-center mb-4' >
        <FaPhone  className='text-blue-500 mr-2' />
        <p>+123 456 789</p>
      </div>

      <div className='flex items-center'>
        <FaMapMarkedAlt  className='text-blue-500 mr-2' />
        <p>123 Travel St,City,Country</p>
      </div>
    </div>
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-bold mb-4'>Get In Touch</h3>
      <form>
        <div className='mb-4'>  
          <label className='text-xl font-bold mb-4'>Name</label>
          <input type='text'className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Your Name'></input>
          </div> 
          <div  className='mb-4'> 
          <label className='text-xl font-bold mb-4'>Email</label>
          <input type='email' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Your Email'></input>
          </div> 
          <div  className='mb-4'> 
          <label className='text-xl font-bold mb-4'>Message</label>
          <textarea  type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Message'></textarea>
          </div> 
          <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded '>Sent Message</button>
      </form>
    </div>
  </div>
 </div>
    </div>
  )
}

export default Contact