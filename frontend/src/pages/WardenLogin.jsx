import React from 'react';
import classNames from 'classnames';

function WardenLogin() {
  return (
    <div className={classNames({
      "flex md:flex-col h-full":true,
      "items-center justify-center":true,
      "text-[8px] md:text-base font-lora":true,
      "md:w-[100%] md:gap-7 md:w-[100vw]":true,
      
})}>

      <div className={classNames({
        "flex flex-col md:flex-row md:space-y-0":true,
        "m-12 space-y-6":true,
        "bg-white shadow-2xl":true,
        "rounded-2xl md:space-y-0":true,
})}>

        <div className={classNames({
          "flex flex-col gap-8 justify-center":true,
          "px-8 p-12 py-0":true,
        
          }  )}>

          <span className={classNames({
            "text-3xl py-4 md:text-4xl font-bold":true,
           } )}>
            <center>Log in</center>
          </span>

          <span className={classNames({
            "font-light text-gray-400":true,
          })}>
            Welcome back! Please enter your details
          </span>

          <input
            type="text"
            className={classNames({
              "w-full border-b-2 solid black border-b-2":true,
             
            "border-indigo-200 border-gray-300 placeholder:text-gray-500":true,
             "p-2 rounded  placeholder:font-light":true,
             
             } )}
            name="email"
            placeholder="Email"
            id="email"
          />

<input
            type="password"
            className={classNames({
              "w-full border-b-2 solid black border-b-2":true,
             
            "border-indigo-200 border-gray-300 placeholder:text-gray-500":true,
             "p-2 rounded  placeholder:font-light":true,
             
             } )}
            name="password"
            placeholder="Password"
            id="password"
          />
          <button className={classNames({
            "w-full p-2":true,
            "bg-button1 text-white rounded-md hover:bg-button1hover":true,
          })}>
            Log in
          </button>

          <div className={classNames({
            " text-center text-gray-400":true,
           } )}>
            Don't have an account?
            <a className={classNames('font-bold', 'text-black')} href="/wardenregister">
              <p></p> Sign up!
            </a>
          </div>

        </div>

        <div className={classNames('relative')}>

          <img
            src="image2.png"
            alt="img"
            className={classNames({
              "w-[350px] h-full md:block object-cover":true,
              "opacity-50 hidden rounder-r-2xl":true,
              
              }  )}
          />

        </div>

      </div>

    </div>
  );
}

export default WardenLogin;
