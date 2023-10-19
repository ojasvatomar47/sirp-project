import React from 'react';
import classNames from 'classnames';

function Register() {
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
  className={classNames(
    'w-[350px]',
    'h-full',
    'opacity-50',
    'hidden',
    'rounded-l-2xl',
    'md:block',
    'object-cover',
  )}
/>

</div>

        <div className={classNames(
          'flex',
          'flex-col',
          'gap-5',
          'justify-center',
          'px-8',
          'p-12',
          'py-0',
        )}>
          

          <span className={classNames('text-3xl md:text-4xl','py-4', 'font-bold')}>
            <center>Sign up</center>
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
                        name="Name"
                        placeholder="Name"
                        id="Name"
                    />

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
                        name="Hostel"
                        placeholder="Hostel"
                        id="Hostel"
                    />

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
                        name="Username"
                        placeholder="Username"
                        id="Username"
                    />

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
            Sign up
          </button>

          <div className={classNames('text-center','mb-2', 'text-gray-400')}>
            Already have an account?
            <a className={classNames('font-bold', 'text-black')} href="/login">
              <p></p> Log in
            </a>
          </div>

        </div>

        

      </div>

    </div>
  );
}

export default Register;
