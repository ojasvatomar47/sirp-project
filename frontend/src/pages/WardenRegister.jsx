import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';

const WardenRegister = () => {

  const [formData, setFormData] = useState({
    password: '',
    name: '',
    email: '',
    hostel: 'Vivekananda', // default
  });

  const [err, setErr] = useState(null)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    
    event.preventDefault()

    try {
      await axios.post('http://localhost:8800/api/wardens/register', formData)
      console.log("Registration successfull")
    } catch (error) {
      setErr(err.response.data)
      console.log("Registration failed")
      console.log(error)
    }
  }

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
            <p>Warden</p>
          </span>

          <span className={classNames({
            "font-light text-gray-400": true,
          })}>
            Welcome back! Please enter your details
          </span>

          <input
            className={classNames({
              "w-full border-b-2 solid black": true,
              
              "border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,
              
            })}
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className={classNames({
              "w-full solid black border-b-2": true,
              
              "border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,
              
            })}
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className={classNames({
              "w-full solid black border-b-2": true,
              
              "border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,
              
            })}
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="hostel" className='text-gray-400'>Hostel</label>

          <select name="hostel" id="hostel" value={formData.hostel} onChange={handleChange}>
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
          })} onClick={handleSubmit}>
            Sign up
          </button>

          <div className={classNames({
            " text-center text-gray-400 mb-2": true,
          })}>
            Don't have an account?
            <span className={classNames('font-bold', 'text-black')} href="/caretakerlogin">
              <Link to='/wardenlogin'>Log In</Link>
            </span>
          </div>

        </div>

      </div>

    </div>

  );
}

export default WardenRegister;
