import React from 'react';

const Hero = () => {
  const backgroundImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/60/Statsbiblioteket_l%C3%A6sesalen-2.jpg';

  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-36 lg:py-56" // Increased height
         style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="container mx-auto text-center relative">
        <h1 className="text-2xl text-white font-extrabold leading-tight lg:text-4xl animate-bounce">
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-1xl text-white lg:text-3xl">
          Discover the Best Experience
        </p>
        <button className="mt-8 bg-yellow-500 hover-bg-yellow-600 text-white font-semibold px-2 py-2 rounded-full transition duration-300 ease-in-out
        lg:px-3 lg:py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;


