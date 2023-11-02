import React, { useContext, useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'

const Complaint = () => {

    const { currentUser } = useContext(AuthContext)

    const { hostel_name } = currentUser

    const [complaint, setComplaint] = useState({})

    const location = useLocation()

    const complaintId = location.pathname.split('/')[2]

    const navigate = useNavigate()

    const getBadgeClass = (progress) => {
        if (progress === 'Solved') return 'bg-red-500';
        if (progress === 'Pending') return 'bg-yellow-500';
        return 'bg-pink-300';
    }

    const getProgressText = (progress) => {
        if (progress === 'Solved') return 'Resolved';
        if (progress === 'Pending') return 'In Progress';
        return 'Escalated';
    }

    const formatSubmissionDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
        const time = new Date(dateTimeString).toLocaleTimeString();
        return `${date} ${time}`;
    };

    useEffect(() => {
        const fetchComplaint = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/complain/singlecomplaint/${complaintId}`, { params: { hostel: hostel_name } })
                setComplaint(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchComplaint()
    }, [complaintId])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8800/api/complain/${complaintId}`)
            console.log("Complain deleted")
            navigate('/studentscomplain')
        } catch (error) {
            console.log(error)
        }
    }

    const todaysDate = new Date()

    const submissionDate = (date) => {
        const subDate = new Date(date)
        return subDate
    }

    const twoDaysAgo = (date) => {
        const subDate = new Date(date)
        const tda = new Date(subDate)
        tda.setDate(subDate.getDate() - 2)
        return tda
    }


    return (
        <div className='flex justify-center items-center h-[100vh] font-lora'>
            <div className='w-[65%] flex flex-col justify-center items-center gap-10 shadow-2xl rounded-[10px] py-14 px-20 border-[3px] border-t-teal-600 border-l-teal-600 bg-gradient-to-br from-[#fff3f3] via-white to-teal-200'>
                <h1 className='text-3xl font-extrabold underline'>COMPLAINT</h1>
                <h2 className='text-2xl capitalize'><span className='font-bold underline'>Title:</span>  {complaint.title}</h2>
                <h2 className='text-2xl capitalize'><span className='font-bold underline'>Description:</span> {complaint.description}</h2>
                <h2 className='text-2xl capitalize'><span className='font-bold underline'>Status:</span> {complaint.status}</h2>
                <h2 className='text-2xl capitalize'><span className='font-bold underline'>Date:</span> {formatSubmissionDateTime(complaint.submission_date)}</h2>
                <h2 className='text-2xl capitalize'><span className='font-bold underline'>Submitted By:</span> {complaint.student_username}</h2>

                <div className='flex gap-32 justify-between'>
                    {
                        (
                            complaint.assigned_to === 'Caretaker'
                            &&
                            submissionDate(complaint.submission_date) <= twoDaysAgo(todaysDate)
                            &&
                            complaint.status === 'Pending'
                        )
                        &&
                        <button onClick={() => fwdToWarden(complaint.complaint_id)} className='bg-teal-500 px-4 py-4 rounded-[4px] text-xl font-semibold text-white hover:bg-teal-700 transition ease-in-out delay-75'>
                            Forward to Warden
                        </button>
                    }

                    {
                        (currentUser.role === 'student' && (currentUser.student_id===complaint.student_id))
                        &&
                        (
                            <div className='flex justify-between gap-32'>
                                <Link to={`/updateComplaint/:${complaint.complaint_id}`}>
                                    <button className="bg-teal-500 px-16 py-4 rounded-[4px] text-xl font-semibold text-white hover:bg-teal-700 transition ease-in-out delay-75">
                                        Update
                                    </button>
                                </Link>
                                <button onClick={() => handleDelete(complaint.complaint_id)} className="bg-teal-500 px-12 py-4 rounded-[4px] text-xl font-semibold text-white hover:bg-teal-700 transition ease-in-out delay-75">
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

export default Complaint