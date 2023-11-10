import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AuthoritySidebar = ({ isSidebarVisible }) => {

    const authContext = useContext(AuthContext)

    const { currentUser } = authContext

    const [hostelComplaints, setHostelComplaints] = useState([])

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

        if (currentUser) {

            const { hostel_name, } = currentUser

            const fetchComplaints = async () => {
                try {
                    const res = await axios.get(`http://localhost:8800/api/complain`, { params: { hostel: hostel_name } })
                    setHostelComplaints(res.data)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchComplaints()

        }
    }, [currentUser])

    return (
        <div className={`flex flex-col flex-no-wrap w-full sm:w-64 md:w-1/4 lg:w-1/4 h-screen p-4 overflow-y-auto transform ${isSidebarVisible ? '' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 z-40`}>
            <h1 className="text-3xl font-bold mb-6 text-black">Hostel Complaints:</h1>
            {hostelComplaints.slice().reverse().map((complaint, index) => (
                <div
                    key={complaint.complaint_id}
                    className={`mb-6 ${(index & 1) ? 'bg-[#fff3f3]' : 'bg-teal-100'} p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 space-y-2`}
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
                </div>
            ))}
        </div>
    );
}

export default AuthoritySidebar;
