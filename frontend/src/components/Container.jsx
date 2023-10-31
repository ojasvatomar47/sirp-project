import React from 'react';

const services = [
  {
    title: 'Panini-A,B',
    description: 'Description of Service 1. This is the first line of description.',
    icon1: 'https://wallpapercave.com/wp/wp4467448.jpg',
    icon2: 'https://wallpapercave.com/wp/wp4467448.jpg',
  },
  {
    title: 'H1-Vashishtha',
    description: 'Description of Service 2. This is the first line of description.',
    icon1: 'https://th.bing.com/th/id/OIG.H66HHmQjq5mPW4Q4b2fG?pid=ImgGn',
    icon2: 'https://th.bing.com/th/id/OIG.H66HHmQjq5mPW4Q4b2fG?pid=ImgGn',
  },
  {
    title: 'H3-Aryabhatta',
    description: 'Description of Service 3. This is the first line of description.',
    icon1: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Statsbiblioteket_l%C3%A6sesalen-2.jpg',
    icon2: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Statsbiblioteket_l%C3%A6sesalen-2.jpg',
  },
  {
    title: 'H4-Vivekananda',
    description: 'Description of Service 4. This is the first line of description.',
    icon1: 'https://th.bing.com/th/id/OIG.H66HHmQjq5mPW4Q4b2fG?pid=ImgGn',
    icon2: 'https://th.bing.com/th/id/OIG.H66HHmQjq5mPW4Q4b2fG?pid=ImgGn',
  },
  {
    title: 'Maa Saraswati',
    description: 'Description of Service 6. This is the first line of description.',
    icon1: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Statsbiblioteket_l%C3%A6sesalen-2.jpg',
    icon2: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Statsbiblioteket_l%C3%A6sesalen-2.jpg',
  },
  {
    title: 'Nagarjuna',
    description: 'Description of Service 5. This is the first line of description.',
    icon1: 'https://wallpapercave.com/wp/wp4467448.jpg',
    icon2: 'https://wallpapercave.com/wp/wp4467448.jpg',
  },
  // Add more service data with icon1 and icon2 as needed
];

const Services = () => {
  return (
    <div className=" bg-gray-300 py-10">
      <h2 className="text-3xl font-semibold text-black text-center mb-4 lg:mb-8">
        <b>HOSTELS</b>
      </h2>
      <div className="ml-3 mr-3 grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={service.icon1}
                  alt={`Icon 1 for ${service.title}`}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="w-32 h-32 rounded-full overflow-hidden ml-4">
                <img
                  src={service.icon2}
                  alt={`Icon 2 for ${service.title}`}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600">{service.description}</p>
              <p className="text-gray-600">Additional line of description 1.</p>
              <p className="text-gray-600">Additional line of description 2.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

