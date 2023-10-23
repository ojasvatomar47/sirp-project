import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

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

  return (
    <div>
      <h1>Complaints</h1>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.complaint_id}>
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <p>Status: {complaint.status}</p>
            <p>Submitted by: {complaint.student_username}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home