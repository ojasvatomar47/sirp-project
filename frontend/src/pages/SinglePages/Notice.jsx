import React, { useContext, useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'

const Notice = () => {

  const { currentUser } = useContext(AuthContext)

  const { hostel_name } = currentUser

  const [notice, setNotice] = useState({})

  const location = useLocation()

  const noticeId = location.pathname.split('/')[2]

  const navigate = useNavigate()

  const formatSubmissionDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
    const time = new Date(dateTimeString).toLocaleTimeString();
    return `${date} ${time}`;
  };

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/notice/${noticeId}`)
        setNotice(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchNotice()
  }, [noticeId])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/notice/${noticeId}`)
      console.log("Notice deleted")
      navigate('/')
      alert("Notice removed successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <li key={notice.notice_id} className='bg-pink-600'>
        <h3>{notice.title}</h3>
        <p>{notice.content}</p>
        <p>Posted by: {notice.user_role === 'Caretaker' ? "Caretaker" : "Warden"}</p>
        <p>Submission time: {formatSubmissionDateTime(notice.date)}</p>
      </li>
      {
        currentUser.role != 'student'
        &&
        (
          <div>
            <button onClick={handleDelete} className='bg-red-600'>Delete Notice</button>
            <Link to={`/updateNotice/${noticeId}`}>
              <button className="bg-blue-300">Update Notice</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Notice