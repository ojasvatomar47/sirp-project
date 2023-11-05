import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Sidebar = ({ isSidebarVisible }) => {

    const authContext = useContext(AuthContext)

    const { currentUser } = authContext

    const { student_id, hostel_name, role } = currentUser

    const [studentComplaints, setStudentComplaints] = useState([])

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

    const todaysDate = new Date()

    const fwdToWarden = async (complaintId) => {

        try {
            const res = await axios.put(`http://localhost:8800/api/complain/forwardToWarden/${complaintId}`)
            alert("Complaint forwarded to warden successfully");
            window.location.reload()
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (complaintId) => {
        try {
            await axios.delete(`http://localhost:8800/api/complain/${complaintId}`)
            console.log("Complain deleted")
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`flex flex-col flex-no-wrap w-full sm:w-64 md:w-1/4 lg:w-1/4 h-screen p-4 bg-gray-100 overflow-y-auto transform ${isSidebarVisible ? '' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 z-40`}>
            <h1 className="text-3xl font-bold mb-6 text-black">Your Complaints:</h1>
            {studentComplaints.slice().reverse().map((complaint, index) => (
                <div
                    key={complaint.complaint_id}
                    className={`mb-6 ${(index&1)?'bg-[#fff3f3]':'bg-teal-100'} p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 space-y-2`}
                >
                    <Link to={`/complaint/:${complaint.complaint_id}`}>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold truncate">{complaint.title}</h2>
                            <span className={`inline-block px-4 py-1 rounded-full text-sm text-white ${getBadgeClass(complaint.status)}`}>
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
                    </Link>
                    
                    {
                        complaint.status === 'Pending'
                        &&
                        <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2`}>
                            {
                                (
                                    complaint.assigned_to === 'Caretaker'
                                    &&
                                    submissionDate(complaint.submission_date) <= twoDaysAgo(todaysDate)
                                    &&
                                    complaint.status === 'Pending'
                                    &&
                                    (currentUser.student_id === complaint.student_id)
                                )
                                &&
                                <button onClick={() => fwdToWarden(complaint.complaint_id)} className="bg-blue-500 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-blue-600 transition-colors duration-200">
                                    Forward to Warden
                                </button>
                            }

                            <Link to={`/updateComplaint/:${complaint.complaint_id}`}>
                                <button className="bg-teal-500 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-teal-600 transition-colors duration-200">
                                    Update
                                </button>
                            </Link>
                            <button onClick={() => handleDelete(complaint.complaint_id)} className="bg-red-600 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-red-700 transition-colors duration-200">
                                Delete
                            </button>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
