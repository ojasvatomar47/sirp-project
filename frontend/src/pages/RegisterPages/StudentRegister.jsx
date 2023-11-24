import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import img from '../../assets/img.png';

const StudentRegister = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    hostel: 'Vivekananda', // DEFAULT
  });

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post('http://localhost:8800/api/students/register', formData)
      console.log("Registration successfull")
      navigate('/studentlogin')
    } catch (error) {
      setErr(err.response.data)
      console.log("Registration failed")
      console.log(error)
    }
  }

  return (
    <div className={classNames(
      'bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%',
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
            src={img}
            alt="img"
            className={classNames({
              "w-[350px] h-full md:block object-cover": true,
              "opacity-90 hidden ": true,
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
            className={classNames({
              "w-full solid black border-b-2": true,
              
              "border-gray-300 placeholder:text-gray-500": true,
              "p-2 rounded  placeholder:font-light": true,
              
            })}
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            className={classNames({
              "w-full solid black border-b-2": true,

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
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={formData.password}
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
            "bg-teal-500 text-white rounded-md hover:bg-teal-600": true,
          })} onClick={handleSubmit}>
            Sign up
          </button>

          <div className={classNames({
            " text-center text-gray-400 mb-2": true,
          })}>
            Already have an account?
            <span className={classNames('font-bold', 'text-black')} href="/studentlogin">
              <Link to='/studentlogin'>Log in</Link>
            </span>
          </div>

          <div className={classNames({
            " text-center text-gray-400":true,
           } )}>
            Register as: 
            <span className={classNames('font-bold', 'text-black')}>
              <Link to='/caretakerregister'> Caretaker</Link> ||
              <Link to='/wardenregister'>  Warden</Link>
            </span>
          </div>

        </div>

      </div>



    </div>

  );
}

export default StudentRegister;
