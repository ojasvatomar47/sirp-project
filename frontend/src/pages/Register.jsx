import React from 'react';

function Register() {
  return (

    <div className="  bg-secondary bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  flex items-center justify-center bg-gray-100 text-[8px] md:text-base h-screen">
      <div className="relative flex flex-col m-4 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className=" overflow-y-scroll h-[565px] w-[360px] flex flex-col justify-center p-4 md:p-8">
          <span className="mb-2 text-3xl font-bold ">Sign Up</span>
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 mt-2"
            name="name"
            placeholder="Full Name"
            id="name"
          />
          <input
            type="text"
            className="w-full p-2 border mt-4 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 mt-2"
            name="rn"
            placeholder="Roll Number"
            id="rn"
          />
          <input
            type="text"
            className="w-full p-2 border mt-4 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 mt-2"
            name="hostel"
            placeholder="Hostel"
            id="hostel"
          />

<span className="mt-4">Gender</span>

<div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 mt-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ml-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ml-2  text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>



          <input
            type="text"
            className="w-full mt-4 p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 "
            name="email"
            placeholder="Email"
            id="email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="mt-4 mb-2 w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          />

          <button
            className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-50 w-full bg-button1 text-white p-2 rounded-lg mb-4 hover:bg-button1hover mt-4"
          >
            Sign up
          </button>

          <div className="text-center text-gray-400 mt-2">
            Already have an account?
            <a className="font-bold text-red" href="/login">
              Login
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="image1.png"
            alt="img"
            className="w-[375px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div className="absolute hidden bottom-4 right-4 p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
