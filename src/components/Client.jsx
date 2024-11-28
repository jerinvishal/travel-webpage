import React from 'react';
import Img1 from '../assets/me.png'
import Img2 from '../assets/me2.png'

const Client = () => {
  const tesimonials = [
    {
    name: 'John Doe',
    image: Img1,
    text: 'This travel agency provided excellent service and helped us plan the perfect vacation.',
    location: 'New York, USA'},
    {
    name: 'Jane Smith',
    image: Img2,
    text: 'Amazing experience! The tour guides were knowledgeable and the destinations were breathtaking.',
    location: 'London, UK'
    },
    {
    name: 'Alice Johnson',
    image: Img1,
    text: 'Great customer service and fantastic travel packages. Will definitely book with them again.',
    location: 'Sydney, Australia'
    }


  ];

  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4' >
        <h2 className='text-3xl font-bold text-center mb-8'>Clients</h2>
        <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tesimonials.map((tesimonials, index) => {
            // Add explicit `return` statement for JSX
            return (
              <div className="bg-white rounded-lg shadow-md text-center p-4 items-center cursor-pointer transform transition duration-300 hover:scale-110  " key={index}>
                <img className='w-24 h-24 rounded-full mx-auto mb-4' src={tesimonials.image}  />
                <div className='p-4'>
                  <h4 className='text-xl font-bold mb-2'>{tesimonials.name}</h4>
                  <p className='text-gray-600'>{tesimonials.location}</p>
                  <p className='text-gray-600 italic'>{tesimonials.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
