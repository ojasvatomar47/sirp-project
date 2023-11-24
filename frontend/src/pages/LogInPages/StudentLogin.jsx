import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { AuthContext } from '../../context/authContext';
import img from '../../assets/img.png';

const StudentLogin = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  }

  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(formData, 'student');
      console.log("done")
      navigate('/')
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className={classNames({
      "bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%":true,
      "flex md:flex-col h-[100vh]":true,
      "items-center justify-center":true,
      "text-[8px] md:text-base font-lora":true,
      "md:gap-7 md:w-[100vw]":true,
      
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
            className={classNames({
              "w-full solid black border-b-2":true,
              
              "border-gray-300 placeholder:text-gray-500":true,
              "p-2 rounded  placeholder:font-light":true,
              
            } )}
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />

<input
            className={classNames({
              "w-full solid black border-b-2":true,
              
              "border-gray-300 placeholder:text-gray-500":true,
              "p-2 rounded  placeholder:font-light":true,
              
            } )}
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className={classNames({
            "w-full p-2":true,
            "bg-teal-500 text-white rounded-md hover:bg-teal-600":true,
          })} onClick={handleSubmit}>
            Log in
          </button>

          {err && <p className='text-red-500'>{err}</p>}

          <div className={classNames({
            " text-center text-gray-400":true,
           } )}>
            Don't have an account?
            <span className={classNames('font-bold', 'text-black')} href="/studentregister">
              <Link to='/studentregister'>Sign up</Link>
            </span>
          </div>

          <div className={classNames({
            " text-center text-gray-400":true,
           } )}>
            Log In as: 
            <span className={classNames('font-bold', 'text-black')}>
              <Link to='/caretakerlogin'>  Caretaker</Link> ||
              <Link to='/wardenlogin'> Warden</Link>
            </span>
          </div>

        </div>

        <div className={classNames('relative')}>

          <img
            src={img}
            alt="img"
            className={classNames({
              "w-[350px] h-full md:block object-cover":true,
              "opacity-90 hidden ": true,
              
              }  )}
          />

        </div>

      </div>

    </div>
  );
}

export default StudentLogin;
