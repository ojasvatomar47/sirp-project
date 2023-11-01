import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
// import logoimg from '../assets/internet.png'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

  const { currentUser } = useContext(AuthContext)

  const [navBackground, setNavBackground] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setNavBackground(true);
        } else {
          setNavBackground(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // [#FF8E8E]
    <div className={`z-50 w-full transition duration-300 ${isHomePage && 'fixed'} ${navBackground ? 'bg-teal-500' : isHomePage ? 'bg-transparent' : 'bg-teal-500'}`}>
      <nav className='flex justify-between items-center py-[1%] px-[6%]'>
        <Link to='/'>
          <div className='flex gap-3 justify-center items-center flex-2'>
            {/* <img src={logoimg} alt="" className='w-[60px] h-[40px]' /> */}
            <h1 className='text-white text-3xl font-fontOne'>Campus Care</h1>
          </div>
        </Link>
        {currentUser &&
          (
            <div className="nav-links flex-3 text-right " id="navLinks">
              <ul className='flex gap-10 font-fontTwo'>
                <li className='no-underline inline-block py-[8px] px-[12px] relative text-white text-xl'>
                  <Link to={'/'}>HOME</Link>
                </li>
                <li className='no-underline inline-block py-[8px] px-[12px] relative text-white text-xl'>
                  {currentUser.role === 'student' && (
                    <Link to={`/profile/student/:${currentUser.student_id}`}>
                      <button onClick={scrollToTop}>PROFILE</button>
                    </Link>
                  )}

                  {currentUser.role === 'caretaker' && (
                    <Link to={`/profile/caretaker/:${currentUser.caretaker_id}`}>
                      <button onClick={scrollToTop}>PROFILE</button>
                    </Link>
                  )}

                  {currentUser.role === 'warden' && (
                    <Link to={`/profile/warden/:${currentUser.warden_id}`}>
                      <button onClick={scrollToTop}>PROFILE</button>
                    </Link>
                  )}
                </li>
                <li className='no-underline inline-block py-[8px] px-[12px] relative text-white text-xl'>
                  {currentUser.role === 'student' && (
                    <Link to={`/studentscomplain`}>
                      <button onClick={scrollToTop}>COMPLAINT</button>
                    </Link>
                  )}

                  {currentUser.role === 'caretaker' && (
                    <Link to={`/caretakercomplain`}>
                      <button onClick={scrollToTop}>COMPLAINT</button>
                    </Link>
                  )}

                  {currentUser.role === 'warden' && (
                    <Link to={`/wardencomplain`}>
                      <button onClick={scrollToTop}>COMPLAINT</button>
                    </Link>
                  )}
                </li>
                <li className='no-underline inline-block py-[8px] px-[12px] relative text-white text-xl' onClick={scrollToTop}><Link to='/about'>ABOUT US</Link></li>
              </ul>
            </div>
          )}
      </nav>
    </div>
  )
}

export default Navbar