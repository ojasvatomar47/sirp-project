import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SectionWithScrollableCards = () => {
  const [data1, setData1] = useState([
    {
      id: 1,
      title: 'Card 1',
      content: 'Content for Card 1',
      postedBy: 'Caretaker 1',
      date: '2023-10-26',
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'Content for Card 2',
      postedBy: 'Caretaker 2',
      date: '2023-10-27',
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'Content for Card 2',
      postedBy: 'Caretaker 2',
      date: '2023-10-27',
    },
  ]);

  const [data2, setData2] = useState([
    {
      id: 3,
      title: 'Card 3',
      content: 'Content for Card 3',
      postedBy: 'Warden 1',
      date: '2023-10-28',
    },
    {
      id: 4,
      title: 'Card 4',
      content: 'Content for Card 4',
      postedBy: 'Warden 2',
      date: '2023-10-29',
    },
    {
      id: 4,
      title: 'Card 4',
      content: 'Content for Card 4',
      postedBy: 'Warden 2',
      date: '2023-10-29',
    },
  ]);

  const { currentUser, logout } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

  const [notices, setNotices] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    if (currentUser) {

      const { role, hostel_name, student_id } = currentUser

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
    return `${date} ${time}`;
  };


  return (
    <div className="flex h-96 "> {/* Increased container height to h-96 */}
      <div className="w-1/2 h-96 p-2 overflow-y-auto">
        <h2 className="text-center text-2xl mb-2 text-black"><b>COMPLAINTS</b></h2>
        {complaints.map((complaint) => (
          <div key={complaint.complaint_id} className="mb-4 p-4 border rounded shadow flex flex-col justify-between h-50 bg-white">
            <Link to={`/complaint/:${complaint.complaint_id}`}>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{complaint.title}</h3>
                <p className="text-gray-600">{complaint.description}</p>
              </div>
              <div className="text-center">
                <p className="text-black">Posted by: {complaint.student_username}</p>
                <p className="text-black">Date: {formatSubmissionDateTime(complaint.submission_date)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-1/2 h-96 p-2 overflow-y-auto mr-2">
        <h2 className="text-center text-2xl mb-2 text-black"><b>NOTICES</b></h2>
        {notices.map((notice) => (
          <div key={notice.notice_id} className="mb-4 p-4 border rounded shadow flex flex-col justify-between h-55 bg-white">
            <Link to={`/notice/:${notice.notice_id}`}>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{notice.title}</h3>
                <p className="text-gray-600">{notice.content}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Posted by: {notice.postedBy}</p>
                <p className="text-gray-600">Date: {notice.user_role === 'Caretaker' ? "Caretaker" : "Warden"}</p>
                <p className="text-black">Date: {formatSubmissionDateTime(notice.date)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWithScrollableCards;
