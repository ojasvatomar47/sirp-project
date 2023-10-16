import React from 'react'

const Login = () => {
  return (
   
    <section className="bg-cyan-200 h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
      <img
          src="Loginpagemainimage.png"
          alt="Sample image" />
      </div>
      < div class="bg-grey-lighter min-h-screen flex flex-col">
                        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mr-1 text-blue font-bold py-8 px-24 text-4xl">Login</h1>

                                <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded " type="text" placeholder="Email" />
                                <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
              Login
            </button>
            
                                
                            </div>
            
                            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                      Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="/register"> Sign up</a>
                    </div>
                        </div>
                    
      
       
      
        
      </div>
    </section>


  )
}

export default Login