import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const StudentsComplain = () => {

  const authContext = useContext(AuthContext)

  const { currentUser } = authContext

  const { student_id, hostel_name, role } = authContext.currentUser

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [studentComplaints, setStudentComplaints] = useState([])

  const navigate = useNavigate()

  const formatSubmissionDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
    const time = new Date(dateTimeString).toLocaleTimeString();
    return `${date} ${time}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newComplaint = {
      title,
      description,
      role,
      student_id,
      hostel_name,
    };

    console.log(newComplaint)

    try {
      const res = await axios.post(`http://localhost:8800/api/complain`, newComplaint);
      console.log('Complaint submitted successfully:', res.data);
      navigate('/')
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }

    setTitle('');
    setDescription('');
  };

  const submissionDate = (date) => {
    const subDate = new Date(date)
    // console.log("Submission date: "+subDate)
    return subDate
  }

  const twoDaysAgo = (date) => {
    const subDate = new Date(date)
    const tda = new Date(subDate)
    tda.setDate(subDate.getDate() - 2)
    // console.log("Two days ago: "+tda)
    return tda
  }

  useEffect(() => {

    if (currentUser) {

      const { student_id } = currentUser

      const fetchStudentComplaints = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/complain/student/${student_id}`)
          setStudentComplaints(res.data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchStudentComplaints()

    }
  }, [currentUser])

  const fwdToWarden = async (complaintId) => {

    console.log(complaintId)

    try {
      const res = await axios.put(`http://localhost:8800/api/complain/forwardToWarden/${complaintId}`)
      alert("Complaint forwarded to warden successfully");
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>

      <div>
        <h1>Complaints</h1>
        <ul className='flex flex-col gap-10 justify-center items-center'>
          {studentComplaints.map((complaint) => (
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
              {
                (
                  complaint.assigned_to === 'Caretaker'
                  &&
                  submissionDate(complaint.submission_date) <= twoDaysAgo(complaint.submission_date)
                )
                &&
                <button onClick={() => fwdToWarden(complaint.complaint_id)}>Forward to warden</button>
              }

            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentsComplain