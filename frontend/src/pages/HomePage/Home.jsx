import '../../App.css';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar.jpeg'
import aryabhattaimg from '../../assets/aryabhatta.jpg'
import vivekanandaimg from '../../assets/vivekananda.jpg'
import vashishtaimg from '../../assets/vasishtha.jpg'
import nagarjunaimg from '../../assets/nagarjuna.jpg'
import paniniimg from '../../assets/panini.jpg'
import maasaraswatiimg from '../../assets/maa-saraswati.jpg'
import caretakerAvatar from "../../assets/avatars/caretakerAvatar.jpg";
import wardenAvatar from "../../assets/avatars/wardenAvatar.jpg";
import avatar1 from "../../assets/avatars/boyAvatar.jpg";
import avatar2 from "../../assets/avatars/girlAvatar1.jpg";

const AboutUs = () => {

  const { currentUser, logout } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

  const [notices, setNotices] = useState([])

  const navigate = useNavigate()

  const hostels = [
    {
      Name: 'Vivekananda Hostel',
      Caretaker: 'Caretaker1',
      Warden: 'Warden1',
      Img: vivekanandaimg,
    },
    {
      Name: 'Maa Saraswati Hostel',
      Caretaker: 'Caretaker2',
      Warden: 'Warden2',
      Img: maasaraswatiimg,
    },
    {
      Name: 'Nagarjuna Hostel',
      Caretaker: 'Caretaker3',
      Warden: 'Warden3',
      Img: nagarjunaimg,
    },
    {
      Name: 'Panini Hostel',
      Caretaker: 'Caretaker4',
      Warden: 'Warden4',
      Img: paniniimg,
    },
    {
      Name: 'Vashishta Hostel',
      Caretaker: 'Caretaker5',
      Warden: 'Warden5',
      Img: vashishtaimg,
    },
    {
      Name: 'Aryabhatta Hostel',
      Caretaker: 'Caretaker6',
      Warden: 'Warden6',
      Img: aryabhattaimg,
    }
  ]


  useEffect(() => {

    if (currentUser) {

      const { hostel_name, } = currentUser

      const fetchComplaints = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/complain`, { params: { hostel: hostel_name } })
          setComplaints(res.data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchComplaints()

    }
  }, [currentUser])

  useEffect(() => {

    if (currentUser) {

      const { hostel_name } = currentUser

      const fetchNotices = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/notice`, { params: { hostel: hostel_name } })
          setNotices(res.data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchNotices()

    }
  }, [currentUser])

  const handleLogout = async (event) => {
    event.preventDefault()

    try {
      await logout(currentUser.role)
      console.log("User has been logged out successfully")
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const formatSubmissionDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
    const time = new Date(dateTimeString).toLocaleTimeString();
    return `${date}`;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const FaqSection = () => {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);
    const articleRef = useRef(null);

    const handleSearchKeyDown = (e) => {
      if (e.key === 'Enter') {
        // Handle search logic here
      }
    };

    const handleItemClick = () => {
      setIsOpen(!isOpen);
    };

    const handleScroll = () => {
      const distanceFromTop = articleRef.current.offsetTop;
      const contentHeight = articleRef.current.clientHeight;
      const visibleContent = contentHeight - window.innerHeight;
      const start = Math.max(0, window.scrollY - distanceFromTop);
      const percent = (start / visibleContent) * 100;
      setScrollHeight(percent);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <section>
        <div className="mx-auto max-w-6xl">
          <div className="p-2 rounded">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-4 text-sm">
                <div className="sticky inset-x-0 top-0 left-0 py-12">
                  <div className="text-3xl text-green-400 mb-8 sticky">Frequently asked questions.</div>
                  <div className="mb-2" onClick={handleItemClick} style={{ cursor: 'pointer' }}>
                    Ask
                  </div>
                  <div className="text-xs text-gray-600">See our FAQ for more details</div>
                  <div className="relative text-gray-600 mt-8 lg:mr-16">
                    <input
                      ref={(el) => (el ? el.focus() : null)}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={handleSearchKeyDown}
                      type="search"
                      name="search"
                      placeholder="Search"
                      className="bg-gray-100 w-full h-10 px-5 rounded-full text-sm focus:outline-none"
                    />
                    <button type="submit" className="focus:outline-none absolute right-0 top-0 mt-3 mr-4">
                      <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                      >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-having-questions-4637856-3864102.png" // Replace with the actual path to your image
                    alt="Frequently asked questions"
                    className="my-4" // You can adjust the margin as needed
                  />
                </div>
              </div>
              <div className="md:w-2/3 py-12" ref={articleRef}>
                <div className="p-4">

                  <h2 className="text-xl font-semibold mb-2">1. How do I file a complaint?</h2>
                  <p className="text-gray-600">To file a complaint, navigate to the "Add a Complaint" section and follow the instructions provided.</p>

                  <h2 className="text-xl font-semibold mb-2 mt-4">2. Can I edit or delete a submitted complaint?</h2>
                  <p className="text-gray-600">Yes, you can edit or delete your submitted complaints. Find the complaint in the "Complaints Registered from your Hostel" section and use the provided options.</p>

                  <h2 className="text-xl font-semibold mb-2 mt-4">3. How are notices communicated in the system?</h2>
                  <p className="text-gray-600">Notices are communicated through the "Notices from Your Hostel" section. Stay updated on important information from caretakers and wardens.</p>

                  <h2 className="text-xl font-semibold mb-2">4. How do I change my password?</h2>
                  <p className="text-gray-600">To change your password, go to your profile settings and find the "Change Password" option. Follow the provided steps to update your password.</p>

                  <h2 className="text-xl font-semibold mb-2 mt-4">5. What happens if my complaint is not resolved?</h2>
                  <p className="text-gray-600">If your complaint is not resolved, you can escalate it to the warden for further action. Keep track of the status in the "Complaints Registered from your Hostel" section.</p>

                  <h2 className="text-xl font-semibold mb-2 mt-4">6. Can I receive notifications for new notices?</h2>
                  <p className="text-gray-600">Yes, you can enable notifications in your profile settings to receive alerts for new notices and updates related to your hostel.</p>

                  <h2 className="text-xl font-semibold mb-2 mt-4">7. How often are new notices posted?</h2>
                  <p className="text-gray-600">The frequency of new notices depends on the activities within your hostel. Check the "Notices from Your Hostel" section regularly for the latest updates.</p>

                  <h2 className="text-xl font-semibold mb-2 mt-4">8. Is there a limit to the number of complaints I can submit?</h2>
                  <p className="text-gray-600">There is no strict limit to the number of complaints you can submit. However, please ensure that your complaints are genuine and relevant to hostel management.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="fixed h-screen w-1 hover:bg-gray-200 top-0 left-0 bg-gray-300">
          <div style={{ maxHeight: `${scrollHeight}%` }} className="h-full bg-green-400"></div>
        </div>
      </section>
    );
  };



  return (
    <div className="App">
      <section className="header">

        <div className="text-box flex flex-col justify-center items-center w-[90%] text-white absolute top-[50%] left-[50%] text-center">
          <h1 className='text-[62px] font-extrabold font-fontOne'>Student Issue Reporting Portal</h1>
          <p className='mt-[10px] mb-[40px] text-[20px] text-white font-semibold font-alveria'>Hi {currentUser ? currentUser.name : 'there'}! Discover our comprehensive platform, dedicated to improving your campus life through effective complaint handling, streamlined communication via notices, and an array of user-friendly features tailored to empower every member of your campus community.</p>
          {!currentUser &&
            (
              <div className='flex gap-10'>
                <Link to='/studentlogin'>
                  <button className="hero-btn text-lg font-semibold transition delay-150 hover:bg-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:border-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:text-black hover:transition-colors inline-block border-[1px] no-underline text-white py-[12px] px-[34px] bg-transparent relative cursor-pointer">
                    Log In
                  </button>
                </Link>

                <Link to='/studentregister'>
                  <button className="hero-btn text-lg font-semibold transition delay-150 ease-linear hover:bg-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:border-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:text-black hover:transition-colors inline-block border-[1px] no-underline text-white py-[12px] px-[34px] bg-transparent relative cursor-pointer">
                    Register
                  </button>
                </Link>
              </div>
            )}
          {
            currentUser &&
            (
              <div className='flex gap-10 font-lora'>
                {currentUser && (
                  <>
                    {currentUser.role === 'student' && (
                      <Link to={`/profile/student/:${currentUser.student_id}`}>
                        <button className='hero-btn hover:bg-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:border-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:text-black hover:transition-colors inline-block border-[1px] no-underline text-white py-[12px] px-[34px] bg-transparent relative cursor-pointer'>Your Profile</button>
                      </Link>
                    )}

                    {currentUser.role === 'caretaker' && (
                      <Link to={`/profile/caretaker/:${currentUser.caretaker_id}`}>
                        <button className='hero-btn hover:bg-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:border-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:text-black hover:transition-colors inline-block border-[1px] no-underline text-white py-[12px] px-[34px] bg-transparent relative cursor-pointer'>Your Profile</button>
                      </Link>
                    )}

                    {currentUser.role === 'warden' && (
                      <Link to={`/profile/warden/:${currentUser.warden_id}`}>
                        <button className='hero-btn hover:bg-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:border-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:text-black hover:transition-colors inline-block border-[1px] no-underline text-white py-[12px] px-[34px] bg-transparent relative cursor-pointer'>Your Profile</button>
                      </Link>
                    )}
                  </>
                )}
                <button href="" onClick={handleLogout} className="hero-btn hover:bg-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:border-gradient-to-r hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 hover:text-black hover:transition-colors inline-block border-[1px] no-underline text-white py-[12px] px-[34px] bg-transparent relative cursor-pointer">Log-Out</button>
              </div>
            )
          }
        </div>

      </section>

      {/* #fff3f3 */}

      <section className="course w-[80%] m-auto text-center pt-[100px]">
        <h1 className='text-3xl font-fontTwo'>Functionalities We Offer</h1>
        <p className='font-lora'>In our hostel management system, we offer an array of advanced functionalities designed to streamline and optimize the management of complaints, notices, and interactions between students, caretakers, and wardens. Here, we outline three key features that empower efficient issue resolution and transparent communication within your dormitory or hostel.</p>

         <div className="row font-autour flex justify-center items-center gap-8">
          <div className="course-col basis-[31%] bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 rounded-[15px] mb-[5%] py-[20px] px-[12px] box-border shadow-md transition-transform transform hover:scale-105">
            <h3>Hierarchical Management of Complaints and Notices</h3>
            <p>The platform provides a structured hierarchy for managing complaints and notices. Students can file complaints, which are initially handled by caretakers. If a complaint isn't resolved or requires higher authority, caretakers can escalate it to wardens. This hierarchical system ensures efficient issue resolution and allows students to follow up on the progress of their complaints.</p>
          </div>
          <div className="course-col basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-[20px] px-[12px] box-border">
            <h3>Comprehensive Complaint Handling</h3>
            <p>Users can create, update, and delete complaints as needed. This comprehensive approach allows students to provide detailed information about their concerns and track the status of their complaints. Caretakers and wardens can efficiently address these complaints based on their roles and responsibilities.</p>
          </div>
          <div className="course-col basis-[31%] bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 rounded-[10px] mb-[5%] py-[20px] px-[12px] box-border">
            <h3>Transparent Communication and Feedback</h3>
            <p>The platform fosters transparent communication among students, caretakers, and wardens. Students can view and comment on notices, track the status of their complaints, and receive updates. They can also provide feedback on the resolution process. This open line of communication ensures that all parties involved are informed and can collaborate effectively to create a better living environment in hostels or dormitories.</p>
          </div>
        </div>
      </section>


      {/* <section className="course w-[80%] m-auto text-center pt-[100px]">
        <h1 className="text-3xl font-fontTwo text-indigo-600 mb-8">Our Features</h1>
        <p className="font-lora text-gray-800 mb-12">
          In our hostel management system, we offer an array of advanced functionalities designed to streamline and optimize the management of complaints, notices, and interactions between students, caretakers, and wardens. Here, we outline three key features that empower efficient issue resolution and transparent communication within your dormitory or hostel.
        </p>

        <div className="row font-autour flex justify-center items-center gap-8">
          <div className="course-col basis-[31%] bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 rounded-[15px] mb-[5%] py-[20px] px-[12px] box-border shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2 text-white">1. Hierarchical Management</h3>
            <p className="text-sm text-gray-200">Structured hierarchy for efficient handling of complaints and notices.</p>
          </div>

          <div className="course-col basis-[31%] bg-[#fff3f3] rounded-[15px] mb-[5%] py-[20px] px-[12px] box-border shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">2. Comprehensive Handling</h3>
            <p className="text-sm text-gray-600">Create, update, and delete complaints with detailed information tracking.</p>
          </div>

          <div className="course-col basis-[31%] bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 rounded-[15px] mb-[5%] py-[20px] px-[12px] box-border shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2 text-white">3. Transparent Communication</h3>
            <p className="text-sm text-gray-200">Open communication with notices, progress tracking, and feedback.</p>
          </div>
        </div>
      </section> */}


      <section className="campus w-[80%] m-auto text-center pt-[50px]">
        <h1 className='text-3xl font-fontTwo'>Hostels We Cover</h1>
        <p className='font-lora'>Learn more about the hostels within our network, where you can efficiently manage your complaints and stay updated on essential notices.</p>

        <div className="row flex-nowrap gap-5 overflow-x-auto w-full font-metal">
          {hostels.map((Hostel) => (
            <div className="campus-col basis-[17%] min-w-[400px] w-80 h-96 rounded-[10px] mb-[30px] relative box-content overflow-hidden">
              <img src={Hostel.Img} alt="" className='w-full h-full object-cover block' />
              <div className="layer">
                <h3 className={`text-white bg-teal-300 font-extrabold text-3xl`}>{Hostel.Name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {currentUser &&
        (
          <section className="testimonials w-[80%] m-auto pt-[100px] text-center">
            <h1 className='text-3xl font-fontTwo'>Notices from Your Hostel</h1>
            <div className="row flex-nowrap gap-5 overflow-x-auto w-full">
              {notices.slice().reverse().map((notice, index) => (
                <Link to={`/notice/:${notice.notice_id}`}>
                  <div key={notice.notice_id} className={`testimonial-col rounded-[10px] mb-[5%] w-80 box-content text-left ${!(index & 1) ? 'bg-[#fff3f3]' : 'bg-teal-100'} p-[25px] cursor-pointer flex`}>
                    {notice.user_role === 'Caretaker' ? (<img src={caretakerAvatar} alt="" className='h-[40px] ml-[5px] mr-[30px] rounded-[50%]' />) : (<img src={wardenAvatar} alt="" className='h-[40px] ml-[5px] mr-[30px] rounded-[50%]' />)}
                    <div className='truncate'>
                      <h2 className='truncate capitalize font-lora'>{notice.title}</h2>
                      <p className='truncate p-0 capitalize font-alveria'>{notice.content}</p>
                      <h3 className='mt-[15px] text-left font-metal'>From: {notice.user_role === 'Caretaker' ? "Caretaker" : "Warden"}</h3>
                      <p className="text-gray-600 p-0">{formatSubmissionDateTime(notice.date)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      {currentUser &&
        (
          <section className="testimonials w-[80%] m-auto pt-[100px] text-center">
            <h1 className='text-3xl font-fontTwo'>Complaints Registered from your Hostel</h1>
            <div className="row flex-nowrap gap-5 overflow-x-auto w-full">
              {complaints.slice().reverse().map((complaint, index) => (
                <Link to={`/complaint/:${complaint.complaint_id}`}>
                  <div key={complaint.complaint_id} className={`testimonial-col rounded-[10px] mb-[5%] w-80 box-content text-left ${(index & 1) ? 'bg-[#fff3f3]' : 'bg-teal-100'} p-[25px] cursor-pointer flex`}>
                    {currentUser.hostel_name === 'Nagarjuna' || currentUser.hostel_name === 'Maa Saraswati' ? (<img src={avatar2} alt="" className='h-[40px] ml-[5px] mr-[30px] rounded-[50%]' />) : (<img src={avatar1} alt="" className='h-[40px] ml-[5px] mr-[30px] rounded-[50%]' />)}
                    <div className='truncate'>
                      <h2 className='truncate capitalize font-lora'>{complaint.title} ({complaint.status})</h2>
                      <p className='truncate p-0 capitalize font-alveria'>{complaint.description}</p>
                      <h3 className='mt-[15px] text-left font-metal'>{complaint.student_username}</h3>
                      <p className="text-gray-600 p-0">{formatSubmissionDateTime(complaint.submission_date)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      {(currentUser && currentUser.role === 'student') &&
        (
          <section className="cta font-lora">
            <h1 className='font-bold text-2xl font-fontTwo'>Add a complaint now</h1>
            <Link to='/studentscomplain'><button onClick={scrollToTop} className='bg-teal-500 text-white px-4 py-3 rounded-[10px] hover:bg-teal-600 transition delay-150 ease-in'>Add a Complaint</button></Link>
          </section>
        )
      }

      <FaqSection />

    </div>


  );
}

export default AboutUs