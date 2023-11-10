import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import ProfileDetails from "../../components/ProfileDetails";
import BodyDetails from "../../components/BodyDetails";
import "../../components/Profile.css";
import AuthoritySidebar from "../../components/AuthoritySidebar";
import avatar from "../../assets/avatars/wardenAvatar.jpg";

const WardenProfile = () => {

  const [counts, setCounts] = useState({
    pending: 0,
    escalated: 0,
    solved: 0,
  });

  const { currentUser } = useContext(AuthContext)

  const [notices, setNotices] = useState([])

  useEffect(() => {
    const fetchComplaintCounts = async () => {
      const { hostel_name } = currentUser;
      try {
        const pendingResponse = await axios.get(`http://localhost:8800/api/complain/countHostelComplaints?hostel=${hostel_name}&status=Pending`);
        const escalatedResponse = await axios.get(`http://localhost:8800/api/complain/countHostelComplaints?hostel=${hostel_name}&status=Escalated`);
        const solvedResponse = await axios.get(`http://localhost:8800/api/complain/countHostelComplaints?hostel=${hostel_name}&status=Solved`);

        setCounts({
          pending: pendingResponse.data,
          escalated: escalatedResponse.data,
          solved: solvedResponse.data,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchComplaintCounts();
  }, []);

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

  const formatSubmissionDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
    const time = new Date(dateTimeString).toLocaleTimeString();
    return `${date}`;
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="upc md:w-2/5 md:flex-1">
          <div className="gradiant bg-gradient-to-b from-teal-300 to-white"></div>

          <div className="profiledown">
            <div>
              <img src={avatar} alt="" />
              <div className="main">
                <ProfileDetails name={currentUser.name} />
              </div>
            </div>
          </div>

          <div className='flex justify-center items-start'>
            <div className="one flex-1 px-4 flex flex-col items-center justify-center">
              <BodyDetails
                Name={currentUser.name}
                HostelName={currentUser.hostel_name}
                Role={currentUser.role}
                MailId={currentUser.email}
                Pending={counts.pending}
                Solved={counts.solved}
                Escalated={counts.escalated}
                Total={counts.pending + counts.escalated + counts.solved}
              />

              <div className='h-full w-full'>
                {currentUser &&
                  (
                    <section className="flex flex-col items-center justify-center w-[1000px] m-auto pt-[20px] text-center">
                      <h1 className='text-2xl font-lora underline font-semibold'>Notices</h1>
                      <div className="row flex-nowrap gap-5 overflow-x-auto w-full">
                        {notices.slice().reverse().map((notice, index) => (
                          <Link key={notice.notice_id} to={`/notice/:${notice.notice_id}`}>
                            <div key={notice.notice_id} className={`testimonial-col rounded-[10px] mb-[5%] w-80 box-content text-left ${!(index & 1) ? 'bg-[#fff3f3]' : 'bg-teal-100'} p-[25px] cursor-pointer flex`}>
                              <img src={avatar} alt="" className='h-[40px] ml-[5px] mr-[30px] rounded-[50%]' />
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
              </div>
            </div>

            <AuthoritySidebar className='md:w-3/5 md:flex-1 flex-1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WardenProfile