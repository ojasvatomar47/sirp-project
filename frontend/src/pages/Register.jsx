import React from 'react'

const Register = () => {
  return (
   
    <section className="bg-cyan-200 h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
      <img
          src="Loginpagemainimage.png"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
         
        </div>
        <div class="bg-Lime-200 min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mr-1 text-blue font-bold py-8 px-20 text-4xl">Sign up!</h1>
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="Full Name" />

                    <label for="hostel"  className="text-sm w-full px-0 py-2   border-gray-300 text-base " type="text"> Choose your Hostel </label>

<select className="bg-gray-200 px-4 "name="hostel" id="hostel">
  <option value="Vasishta">Vasishta</option>
  <option value="Vivekanand">Vivekanand</option>
  <option value="Panini">Panini</option>
  <option value="Nagarjun">Nagarjun</option>
  <option value="Maa Saraswati">Maa Saraswati</option>

</select>

                    
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Roll Number" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
  Create Account
</button>

                    
                </div>

                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="/login">Log in</a>
        </div>
            </div>
        </div>

        
      </div>
    </section>


  )
}

export default Register