import React from 'react';
import gal1 from '../assets/gal1.jpg'
import gal2 from '../assets/gal2.jpg'
import gal3 from '../assets/gal3.png'
import gal4 from '../assets/gal4.jpg'

const PopularDestinations = () => {
  const destinations = [
    {
      image:gal1,
      text: 'Paris, France',
      description: 'The City of Light draws millions of visitors every year with its unforgettable ambiance.',
    },
    {
      image: gal2,
      text: 'Bali, Indonesia',
      description: 'Bali is a living postcard, a living paradise that feels like a fantasy.',
    },
    {
      image: gal3,
      text: 'New York, USA',
      description: 'New York is the largest city in the United States and home to many world-famous attractions.',
    },
    {
      image: gal4,
      text: 'Tokyo, Japan',
      description: 'Tokyo offers a seemingly unlimited choice of entertainment, shopping, cultural attractions, and dining.',
    },
  ];

  return (
    <div className='py-12 bg-gray-100'>
      <div className='conatiner mx-auto px-4' >
        <h2 className='text-3xl font-bold text-center mb-8'>Popular Destinations</h2>
        <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => {
            // Add explicit `return` statement for JSX
            return (
              <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer " key={index}>
                <img src={city.image} alt={city.text} className='w-full h-48 object-cover transform transition duration-300 hover:scale-110' />
                <div className='p-4'>
                  <h4 className='text-xl font-bold mb-2'>{city.text}</h4>
                  <p className='text-gray-600'>{city.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
