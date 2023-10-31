// import React, { useState } from 'react';
// import logo_final from '../assets/logo_final.jpeg';
// import avatar from '../assets/avatar.jpeg';

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMobileMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="bg-blue-500 p-1 flex items-center justify-between lg:p-5">
//       {/* Hamburger Button for Mobile */}
//       <div className="md:hidden">
//         <button onClick={toggleMobileMenu} className="text-white">
//           ☰
//         </button>
//       </div>

//       {/* Left Section (Logo and Website Name) */}
//       <div className="flex items-center mr-5">
//         {/* Conditionally render the logo based on screen width */}
//         <img
//           src={logo_final}
//           alt="Website Logo"
//           className="h-12 w-12 rounded-full mr-2 md:inline-block hidden"
//         />
//         {/* <span className="text-white lg:text-3xl font-semibold sm:text-3xl">
//           Campus Care
//         </span> */}
//         <span className="ml-12 text-white text-2xl lg:text-3xl font-semibold lg:ml-5">
//           Campus Care
//         </span>

//       </div>

//       {/* Middle Section (Navigation Links) - Responsive */}
//       <div
//         className={`md:flex space-x-2 md:px-20 flex-grow items-center ${showMenu ? 'block' : 'hidden'
//           } md:space-x-6 md:block justify-around`}
//       >
//         <a
//           href="#"
//           className="text-white text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
//         >
//           Home
//         </a>
//         <a
//           href="#"
//           className="text-white text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
//         >
//           Complaint
//         </a>
//         <a
//           href="#"
//           className="text-white text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
//         >
//           About
//         </a>
//         <a
//           href="#"
//           className="text-white text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
//         >
//           Profile
//         </a>
//       </div>

//       {/* Button Near Avatar Image - Responsive */}
//       <div className={`md:flex items-center ${showMenu ? 'hidden' : 'block'}`}>
//         <img src={avatar} alt="User Image" className="h-8 w-8 rounded-full ml-5 lg:h-12 lg:w-12" />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import logo_final from '../assets/logo_final.jpeg';
import avatar from '../assets/avatar.jpeg';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeSidebar = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav className="bg-gray-300 p-1 flex items-center justify-between lg:p-5">
        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            ☰
          </button>
        </div>

        {/* Left Section (Logo and Website Name) */}
        <div className="flex items-center mr-5">
          <img
            src={logo_final}
            alt="Website Logo"
            className="h-12 w-12 rounded-full mr-2 md:inline-block hidden"
          />
          <span className="ml-12 text-black text-2xl lg:text-3xl font-semibold lg:ml-5">
            Campus Care
          </span>
        </div>

        {/* Middle Section (Navigation Links) - Responsive */}
        <div
          className={`md:flex space-x-2 md:px-20 flex-grow items-center ${showMenu ? 'block' : 'hidden'
            } md:space-x-6 md:block justify-around`}
        >
          <a
            href="#"
            className="text-black text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
          >
            Complaint
          </a>
          <a
            href="#"
            className="text-black text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
          >
            About
          </a>
          <a
            href="#"
            className="text-black text-xl md:text-xl text-base transition duration-300 ease-in-out hover:text-yellow-400 transform hover:scale-110"
          >
            Profile
          </a>
        </div>

        {/* Button Near Avatar Image - Responsive */}
        <div className={`md:flex items-center ${showMenu ? 'hidden' : 'block'}`}>
          <img src={avatar} alt="User Image" className="h-8 w-8 rounded-full ml-5 lg:h-12 lg:w-12" />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`md:hidden bg-blue-500 text-white w-60 h-screen fixed top-0 left-0 transform ${showMenu ? 'translate-x-0' : '-translate-x-60'
          } transition-transform duration-300 ease-in-out z-10`}
      >
        {/* Close button */}
        <button onClick={closeSidebar} className="p-4 text-white absolute top-0 right-0 hover:text-yellow-400">
          &times;
        </button>

        {/* Sidebar content */}
        <a href="#" className="block p-4">Link 1</a>
        <a href="#" className="block p-4">Link 2</a>
        <a href="#" className="block p-4">Link 3</a>
      </div>
    </div>
  );
}

export default Navbar;


