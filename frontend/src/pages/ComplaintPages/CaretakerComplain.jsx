import React, { useContext, useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'

const CaretakerComplain = () => {

    const { currentUser } = useContext(AuthContext)

    const [pendingComplaints, setPendingComplaints] = useState([])

    const [resolvedComplaints, setResolvedComplaints] = useState([])

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const navigate = useNavigate()

    const { hostel_name } = currentUser

    const [showInProgress, setShowInProgress] = useState(false);

    const [showCompleted, setShowCompleted] = useState(false);

    const postNotice = async (event) => {

        event.preventDefault()

        const user_role = 'Caretaker'
        const user_id = currentUser.caretaker_id
        const hostel = hostel_name

        const newNotice = {
            title, 
            content,
            user_id,
            user_role,
            hostel
        }

        console.log(newNotice)

        try {
            const res = await axios.post(`http://localhost:8800/api/notice`, newNotice)
            console.log("Notice created successfully")
            alert(`New notice posted from ${currentUser.name}`)
            window.location.reload()
        } catch (error) {
            console.log('Error while posting notice: ', error)
        }

        setTitle('')
        setContent('')
    }

    useEffect(() => {

        const fetchPendingComplaints = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/complain/caretaker/pending`, { params: { hostelName: hostel_name } })
                setPendingComplaints(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPendingComplaints()
    }, [currentUser])

    useEffect(() => {

        const fetchResolvedComplaints = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/complain/caretaker/resolved`, { params: { hostelName: hostel_name } })
                setResolvedComplaints(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchResolvedComplaints()
    }, [currentUser])

    const formatSubmissionDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
        const time = new Date(dateTimeString).toLocaleTimeString();
        return `${date} ${time}`;
    };

    const handleStatus = async (complaintId, updateTo) => {

        try {
            const res = await axios.put(`http://localhost:8800/api/complain/status/${complaintId}`, { status: updateTo })
            console.log(res.data)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const ComplaintsList = ({ complaints }) => {
        return (
            <div className="flex flex-col overflow-y-auto max-h-[calc(100vh-200px)] bg-gray-200">
                {complaints.map((complaint, index) => (
                    <div key={complaint.complaint_id} className={`mb-4 ${(index&1)?'bg-[#fff3f3]':'bg-teal-100'} p-4 rounded-lg shadow-lg`}>
                        {/* Display the username */}
                        <Link to={`/complaint/:${complaint.complaint_id}`}>
                            <h3 className="text-gray-800 font-medium mb-2">{complaint.student_username}</h3>
                            <h2 className="text-xl mb-2 font-semibold">{complaint.title}</h2>
                            <div className='mt-1 text-black text-sm mb-2'>
                                <p className='text-sm'>{complaint.description}</p>
                                <p className='text-xs'>{formatSubmissionDateTime(complaint.submission_date)}</p>
                            </div>
                        </Link>
                        <div className="flex justify-between items-center">
                            <div className="mb-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-white ${getBadgeClass(complaint.status)}`}>
                                    {getProgressText(complaint.status)}
                                </span>
                            </div>
                            {complaint.status === 'Pending'
                                ?
                                (
                                    <button onClick={() => handleStatus(complaint.complaint_id, 'Solved')} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                        Resolved
                                    </button>
                                )
                                :
                                (
                                    <button onClick={() => handleStatus(complaint.complaint_id, 'Pending')} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                        In Progress
                                    </button>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
        );
    }

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

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen bg-gray-200 capitalize font-lora">
            {/* Work in Progress */}
            <div className="w-full lg:w-1/3 p-4">
                <button onClick={() => setShowInProgress(!showInProgress)} className="lg:hidden mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-between">
                    Complaints In Progress
                    <span>{showInProgress ? '▲' : '▼'}</span>
                </button>

                {(showInProgress || window.innerWidth >= 1024) && (
                    <>
                        <h2 className="hidden lg:block text-2xl mb-4">Complaints In Progress</h2>
                        <ComplaintsList complaints={pendingComplaints} />
                    </>
                )}
            </div>

            {/* Completed */}
            <div className="w-full lg:w-1/3 p-4">
                <button onClick={() => setShowCompleted(!showCompleted)} className="lg:hidden mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-between">
                    Resolved Complaints
                    <span>{showCompleted ? '▲' : '▼'}</span>
                </button>

                {(showCompleted || window.innerWidth >= 1024) && (
                    <>
                        <h2 className="hidden lg:block text-2xl mb-4">Resolved Complaints</h2>
                        <ComplaintsList complaints={resolvedComplaints} />
                    </>
                )}
            </div>

            {/* Notice Form */}
            < div className="w-full lg:w-1/3 p-4 mt-10 lg:mt-0" > {/* Added `mt-10` for margin-top */}
                < h2 className="text-2xl mb-4" > Notice</h2 >
                <form onSubmit={postNotice} className="bg-gradient-to-tl from-teal-200 to-[#fff3f3] p-4 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-bold mb-2">Title:</label>
                        <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} className="capitalize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter title" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label>
                        <textarea id="description" name="description" onChange={(e) => setContent(e.target.value)} className="capitalize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter description"></textarea>
                    </div>
                    <button type="submit" className="bg-teal-500 px-16 py-4 rounded-[4px] text-xl font-semibold text-white hover:bg-teal-700 transition ease-in-out delay-150">
                        Add Notice
                    </button>
                </form>
            </div >

        </div >
    );
}

export default CaretakerComplain;
