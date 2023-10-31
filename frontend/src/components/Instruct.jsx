import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-300 text-black py-20 "> {/* Added mt-8 for top margin */}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-black">Welcome to Campus Care !</h1>
        <p className="text-lg mb-8">Please follow these instructions to make the most of your experience:</p>
        <ul className="text-left text-lg mb-8">
          <li className="mb-2">
            <strong>1. Register a complaint:</strong> this is a complaint website
          </li>
          <li className="mb-2">
            <strong>2. Maintaining the Hierarchy:</strong> You cannot forward your complaint to the warden before 2 days of lodging it to the caretaker.
          </li>
          <li className="mb-2">
            <strong>3. Contact Support:</strong> If you encounter any issues, our support team is here to help.
          </li>
        </ul>
        <button className="bg-yellow-500 text-blue-500 hover:bg-yellow-400 hover:text-blue-400 py-2 px-4 rounded-full font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
