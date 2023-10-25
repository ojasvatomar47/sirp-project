import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

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
    <div>
      <button onClick={handleLogout}>logout</button>
      <h1>Complaints</h1>
      <ul className='flex flex-col gap-10 justify-center items-center'>
        {complaints.map((complaint) => (
          <div key={complaint.complaint_id}>
            <Link to={`/complaint/:${complaint.complaint_id}`}>
              <li key={complaint.complaint_id} className='bg-pink-600'>
                <h3>{complaint.title}</h3>
                <p>{complaint.description}</p>
                <p>Status: {complaint.status}</p>
                <p>Submitted by: {complaint.student_username}</p>
                <p>Submission time: {formatSubmissionDateTime(complaint.submission_date)}</p>
              </li>
            </Link>
          </div>
        ))}
      </ul>

      <h1>Notices</h1>
      <ul className='flex flex-col gap-10 justify-center items-center'>
        {notices.map((notice) => (
          <div key={notice.notice_id}>
            <Link to={`/notice/:${notice.notice_id}`}>
              <li key={notice.notice_id} className='bg-pink-600'>
                <h3>{notice.title}</h3>
                <p>{notice.content}</p>
                <p>Posted by: {notice.user_role === 'Caretaker' ? "Caretaker" : "Warden"}</p>
                <p>Submission time: {formatSubmissionDateTime(notice.date)}</p>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Home