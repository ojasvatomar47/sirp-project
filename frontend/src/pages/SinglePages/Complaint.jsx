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
        <div className='flex justify-center items-center'>
            <div
                key={complaint.complaint_id}
                className="mb-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 space-y-2"
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{complaint.title}</h2>
                    <span className={`inline-block px-4 py-1 rounded-full cursor-pointer text-sm text-white ${getBadgeClass(complaint.status)}`}>
                        {getProgressText(complaint.status)}
                    </span>
                </div>
                <p className='text-xs text-gray-500 font-semibold'>@{complaint.student_username}</p>
                <div className='text-black text-sm'>
                    <p className='text-sm truncate w-[150px]'>
                        {complaint.description}
                    </p>
                    <p className='text-xs mt-1'>{formatSubmissionDateTime(complaint.submission_date)}</p>
                </div>
                <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2`}>
                    {
                        (
                            complaint.assigned_to === 'Caretaker'
                            &&
                            submissionDate(complaint.submission_date) <= twoDaysAgo(complaint.submission_date)
                            &&
                            complaint.status === 'Pending'
                        )
                        &&
                        <button onClick={() => fwdToWarden(complaint.complaint_id)} className="bg-blue-500 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-blue-600 transition-colors duration-200">
                            Forward to Warden
                        </button>
                    }

                    {
                        currentUser.role === 'student'
                        &&
                        (
                            <div>
                                <Link to={`/updateComplaint/:${complaint.complaint_id}`}>
                                    <button className="bg-teal-500 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-teal-600 transition-colors duration-200">
                                        Update
                                    </button>
                                </Link>
                                <button onClick={() => handleDelete(complaint.complaint_id)} className="bg-red-600 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-red-700 transition-colors duration-200">
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