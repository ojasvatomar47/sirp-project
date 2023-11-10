import first from '../../assets/about/first.jpg'
import second from '../../assets/about/second.jpg'
import third from '../../assets/about/third.jpg'
import fourth from '../../assets/about/fourth.jpg'
import fifth from '../../assets/about/fifth.jpg'
import sixth from '../../assets/about/sixth.jpg'
import seventh from '../../assets/about/seventh.jpg'
import eighth from '../../assets/about/eighth.jpg'
import ninth from '../../assets/about/ninth.jpg'
import tenth from '../../assets/about/tenth.jpg'
import eleventh from '../../assets/about/eleventh.jpg'
import twelth from '../../assets/about/twelth.jpg'
import thirteenth from '../../assets/about/thirteenth.jpg'

const AboutUs = () => {
  return (
    <div className='p-5 md:p-10 flex gap-10'>
      <div className='flex-1 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 border-[3px] border-t-teal-400 border-l-teal-400 border-r-white border-b-white px-5 py-5'>
        <img src={second} alt="" />
        <img src={third} alt="" />
        <img src={second} alt="" />
        <img src={second} alt="" />
        <img src={fifth} alt="" />
        <img src={first} alt="" />
        <img src={third} alt="" />
        <img src={thirteenth} alt="" />
        <img src={sixth} alt="" />
        <img src={seventh} alt="" />
        <img src={eighth} alt="" />
        <img src={ninth} alt="" />
        <img src={third} alt="" />
        <img src={tenth} alt="" />
        <img src={eleventh} alt="" />
        <img src={twelth} alt="" />
        <img src={fourth} alt="" />
        <img src={second} alt="" />
        <img src={thirteenth} alt="" />
      </div>
      <div className='font-alveria flex-1 flex flex-col justify-start text-center items-center gap-6 border-[3px] border-r-teal-400 border-b-teal-400 border-t-white border-l-white px-5 py-5'>
        <h1 className='font-fontTwo text-3xl font-bold text-white bg-teal-200 px-3 pt-2 cursor-pointer'>ABOUT US</h1>
        <div className='text-lg flex flex-col gap-5 leading-10'>
          <p className='text-lg'>Welcome to the heart of our hostel management system, where innovation and convenience meet to enhance your hostel experience across six hostels: Vivekananda Hostel, Maa-Saraswati Hostel, Nagarjuna Hostel, Panini Hostel, Aryabhatta Hostel, and Vashishtha Hostel. Our platform is a product of hard work and dedication from a team of talented students and hosts a range of features designed to make your stay comfortable and hassle-free.
          </p>
          <p className='text-lg'>
            <span className='font-extrabold'>Complaint Management:</span> Our system empowers you, the students, to voice your concerns effectively. Use the "Complaints" page to submit, update, and delete complaints. Should an issue persist without resolution for two days, you have the option to escalate it to the warden for immediate attention. We value your feedback and believe in creating a responsive living environment.
          </p>
          <p className='text-lg'>
            <span className='font-extrabold'>Caretaker and Warden Engagement:</span> Caretakers and wardens play pivotal roles in maintaining a harmonious hostel life. They can sign in to the system to view and resolve complaints submitted by students. This two-way communication fosters prompt issue resolution and ensures your comfort and security.
          </p>
          <p className='text-lg'>
            <span className='font-extrabold'>Notices and Updates:</span> Stay informed with notices and updates from caretakers and wardens. These announcements keep you up-to-date with important hostel information, events, and maintenance schedules.
          </p>
          <p className='text-lg'>
            We are committed to providing a seamless and student-friendly hostel experience. Our system is continually evolving to meet your needs and make your time at hostels H1 to H6 as enjoyable as possible.
          </p>
          <p className='text-lg'>
            Thank you for being a part of our hostel community. Your feedback and participation drive us to excel in delivering top-notch services and ensuring your stay is a memorable one. We are here to serve you and make your hostel life exceptional.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs