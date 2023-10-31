import React from 'react';
import logo from '../assets/logo.jpeg';

const services = 
[
  {
    title: 'Service 1',
    description: 'Description of Service 1.',
    icon: 'https://wallpapercave.com/wp/wp4467448.jpg',
  },
  {
    title: 'Service 2',
    description: 'Description of Service 2.',
    icon: 'https://th.bing.com/th/id/OIG.H66HHmQjq5mPW4Q4b2fG?pid=ImgGn',
  },
  {
    title: 'Service 3',
    description: 'Description of Service 3.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Statsbiblioteket_l%C3%A6sesalen-2.jpg',
  },
  {
    title: 'Service 4',
    description: 'Description of Service 4.',
    icon: 'https://cdn.vectorstock.com/i/preview-1x/73/03/hostel-vector-26477303.jpg',
  },
];

const Services = () => {
  return (
    <div className="  bg-gray-300 py-10">
      <h2 className="text-3xl font-semibold text-black text-center mb-4  lg:mb-8">Our Services</h2>
      <div className=" ml-3 mr-3 grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        {services.map((service, index) => 
        (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105"
          >
            <img
              src={service.icon}
              alt={`Icon for ${service.title}`}
              className="w-full h-36 mx-auto mb-4"
            />
            <div className='text-center'>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

