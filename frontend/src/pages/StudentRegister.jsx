import React from 'react';
import classNames from 'classnames';

function StudentRegister() {
  return (
    <div className={classNames(
      'h-full',
      'font-lora',
      'flex',
      'md:flex-col',
      'items-center',
      'justify-center',
      'text-[8px]',
      'md:text-base',
      'md:w-[100vw]',
      'md:w-[100%]',
      'md:gap-4',
    )}>

      <div className={classNames(
        'h-full',
        'flex',
        'flex-col',
        'm-4',
        'space-y-6',
        'bg-white',
        'shadow-2xl',
        'rounded-2xl',
        'md:flex-row',
        'md:space-y-0',
      )}>
        <div className={classNames('relative')}>

          <img
            src="image2.png"
            alt="img"
            className={classNames({
              "w-[350px] h-full md:block object-cover": true,
              "opacity-50 hidden rounder-r-2xl": true,

            })}
          />

        </div>

        <div className={classNames({
          "flex flex-col gap-5 justify-center": true,
          "px-8 p-12 py-0": true,

        })}>

          <span className={classNames({
            "text-3xl py-4 md:text-4xl font-bold": true,
          })}>
            <center>Sign up</center>
          </span>

          <span className={classNames({
            "font-light text-gray-400": true,
          })}>
            Welcome back! Please enter your details
          </span>

          <input
            type="text"
            className={classNames({
              "w-full border-b-2 solid black border-b-2": true,

              "border-indigo-200 border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,

            })}
            name="Name"
            placeholder="Name"
            id="Name"
          />

          <input
            type="text"
            className={classNames({
              "w-full border-b-2 solid black border-b-2": true,

              "border-indigo-200 border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,

            })}
            name="Username"
            placeholder="Username"
            id="Username"
          />

          <input
            type="text"
            className={classNames({
              "w-full border-b-2 solid black border-b-2": true,

              "border-indigo-200 border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,

            })}
            name="email"
            placeholder="Email"
            id="email"
          />

          <input
            type="password"
            className={classNames({
              "w-full border-b-2 solid black border-b-2": true,

              "border-indigo-200 border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,

            })}
            name="password"
            placeholder="Password"
            id="password"
          />

          <label for="hostel" className='text-gray-400'>Hostel</label>

          <select name="hostel" id="hostel">
            <option value="Vivekananda">Vivekananda</option>
            <option value="Maa Saraswati">Maa Saraswati</option>
            <option value="Nagarjuna">Nagarjuna</option>
            <option value="Aryabhatta">Aryabhatta</option>
            <option value="Panini">Panini</option>
            <option value="Vashishta">Vashishta</option>
          </select>

          <button className={classNames({
            "w-full p-2": true,
            "bg-button1 text-white rounded-md hover:bg-button1hover": true,
          })}>
            Sign up
          </button>

          <div className={classNames({
            " text-center text-gray-400 mb-2": true,
          })}>
            Don't have an account?
            <a className={classNames('font-bold', 'text-black')} href="/studentlogin">
              <p></p> Log in
            </a>
          </div>

        </div>

      </div>



    </div>

  );
}

export default StudentRegister;
