import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

  const { currentUser } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

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

  const formatSubmissionDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
    const time = new Date(dateTimeString).toLocaleTimeString();
    return `${date} ${time}`;
  };

  return (
    <div>
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
    </div>
  )
}

export default Home