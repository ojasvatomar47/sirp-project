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
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <div className='w-[65%] flex flex-col justify-center items-center gap-10 shadow-2xl rounded-[10px] py-14 border-[3px] border-t-teal-600 border-l-teal-600'>
        <h1 className='text-3xl font-extrabold underline'>NOTICE</h1>
        <h2 className='text-2xl'><span className='font-bold underline'>Title:</span>  {notice.title}</h2>
        <h2 className='text-2xl'><span className='font-bold underline'>Description:</span> {notice.content}</h2>
        <h2 className='text-2xl'><span className='font-bold underline'>From:</span> {notice.user_role === 'Caretaker' ? "Caretaker" : "Warden"}</h2>
        <h2 className='text-2xl'><span className='font-bold underline'>Date:</span> {formatSubmissionDateTime(notice.date)}</h2>

        <div>

          {
            currentUser.role != 'student'
            &&
            (
              <div className='flex justify-between gap-32'>
                <Link to={`/updatenotice/:${notice.notice_id}`}>
                  <button className="bg-teal-500 px-16 py-4 rounded-[4px] text-xl font-semibold text-white hover:bg-teal-700 transition ease-in-out delay-75">
                    Update
                  </button>
                </Link>
                <button onClick={() => handleDelete(notice.notice_id)} className="bg-teal-500 px-12 py-4 rounded-[4px] text-xl font-semibold text-white hover:bg-teal-700 transition ease-in-out delay-75">
                  Delete
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Notice