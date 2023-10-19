import React from 'react';
import classNames from 'classnames';

function Login() {
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
      'md:gap-7',
    )}>

      <div className={classNames(
        'h-full',
        'flex',
        'flex-col',
        'm-12',
        'space-y-6',
        'bg-white',
        'shadow-2xl',
        'rounded-2xl',
        'md:flex-row',
        'md:space-y-0',
      )}>

        <div className={classNames(
          'flex',
          'flex-col',
          'gap-8',
          'justify-center',
          'px-8',
          'p-12',
          'py-0',
        )}>

          <span className={classNames('text-3xl', 'py-4','md:text-4xl', 'font-bold')}>
            <center>Log in</center>
          </span>

          <span className={classNames('font-light', 'text-gray-400')}>
            Welcome back! Please enter your details
          </span>

          <input
            type="text"
            className={classNames(
              'w-full',
              'border-b-2',
              'solid',
              'black',
              'border-indigo-200',
              'p-2',
              'border-b-2',
              'border-gray-300',
              'rounded',
              'placeholder:font-light',
              'placeholder:text-gray-500',
            )}
            name="email"
            placeholder="Email"
            id="email"
          />

          <input
            type="password"
            name="pass"
            placeholder="Password"
            id="pass"
            className={classNames(
              'w-full',
              'border-b-2',
              'border-indigo-200',
              'p-2',
              'border-b-2',
              'border-gray-300',
              'rounded',
              'placeholder:font-light',
              'placeholder:text-gray-500',
            )}
          />

          <button className={classNames('w-full', 'bg-button1', 'text-white', 'p-2', 'rounded-md', 'hover:bg-button1hover')}>
            Log in
          </button>

          <div className={classNames('text-center', 'text-gray-400')}>
            Don't have an account?
            <a className={classNames('font-bold', 'text-black')} href="/register">
              <p></p> Sign up!
            </a>
          </div>

        </div>

        <div className={classNames('relative')}>

          <img
            src="image2.png"
            alt="img"
            className={classNames(
              'w-[350px]',
              'h-full',
              'opacity-50',
              'hidden',
              'rounded-r-2xl',
              'md:block',
              'object-cover',
            )}
          />

        </div>

      </div>

    </div>
  );
}

export default Login;
