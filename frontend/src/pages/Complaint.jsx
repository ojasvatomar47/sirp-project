import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import axios from 'axios'

const Complaint = () => {

    const { currentUser } = useContext(AuthContext)

    const { hostel_name } = currentUser

    const [complaint, setComplaint] = useState({})

    const location = useLocation()

    const complaintId = location.pathname.split('/')[2]

    const formatSubmissionDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
        const time = new Date(dateTimeString).toLocaleTimeString();
        return `${date} ${time}`;
    };

    useEffect(() => {
        const fetchComplaint = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/complain/${complaintId}`, { params: { hostel: hostel_name } })
                setComplaint(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchComplaint()
    }, [complaintId])

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-pink-600'>
                <h3>{complaint.title}</h3>
                <p>{complaint.description}</p>
                <p>Status: {complaint.status}</p>
                <p>Submitted by: {complaint.student_username}</p>
                <p>Submission time: {formatSubmissionDateTime(complaint.submission_date)}</p>
            </div>
        </div>
    )
}

export default Complaint