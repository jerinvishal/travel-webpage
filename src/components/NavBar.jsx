import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {

const[isopen,setIsopen]=useState(false);

  return (
    <nav className='fixed  m-4 top-0 right-0  left-0 shadow-lg z-10 bg-white'>
        <div className="container px-4 flex justify-between items-center h-16">
            <h3 className='text-2xl  font-bold'>Travel</h3>
            <div className="hidden md:flex space-x-4 font-bold items-center ">
                <Link to="/" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>Home</Link>
                <Link to="/gallery" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>Gallery</Link>
                <Link to="/contact" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>Contact</Link>
                <Link to="/about" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>About</Link>
                <button className='py-2 px-6 border bg-gray-400'>Login</button>
            </div>
            <div >
              <button className='md:hidden' onClick={()=> setIsopen(!isopen)}>
                {isopen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
        </div>
        <div>
        {isopen &&(
          <div className="md:hidden flex space-y-6  py-4 flex flex-col bg-white items-center ">
          <Link to="/" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>Home</Link>
          <Link to="/gallery" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>Gallery</Link>
          <Link to="/contact" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>Contact</Link>
          <Link to="/about" className='px-6 py-4 hover:bg-gray-600 hover:text-white'>About</Link>
          <button className='py-2 px-6 border bg-gray-400'>Login</button>
      </div>
        )}
        </div>
    </nav>
  )
}

export default NavBar