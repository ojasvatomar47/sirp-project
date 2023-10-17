import React from 'react'

function Login() {
  return (
    <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 bg-primary flex md:flex-col items-center justify-center  bg-gray-100 text-[8px] md:text-base">
      <div
        class=" h-full flex flex-col m-20 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row  md:space-y-0"
      >
        <div class="flex flex-col justify-center p-8 p-14 md">
          <span class="mb-3 text-4xl font-bold"> Welcome back!</span>
          <span class="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div class="py-4">
            <input
              type="text"
              class="w-full p-2 border  border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              placeholder='Email'
              id="email"
            />
          </div>
          <div class="py-4">
            <input
              type="password"
              name="pass"
              placeholder='Password'
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          
          <button
            class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-50 w-full bg-button1 text-white p-2 rounded-lg mb-6 hover:bg-button1hover mt-8"
          >
            Log in
          </button>
        
          <div class="text-center text-gray-400 mt-4">
            Don't have an account?
            <a class="font-bold text-red "href='/register' >Sign up for free</a>
          </div>
        </div>
        <div class="relative">
          <img
            src="image1.png"
            alt="img"
            class="w-[375px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login