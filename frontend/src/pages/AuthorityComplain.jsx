import React, { useState } from 'react';

function AuthorityComplain() {
    const [complaints, setComplaints] = useState(defaultComplaints);
    const [showInProgress, setShowInProgress] = useState(false);
    const [showCompleted, setShowCompleted] = useState(false);

    function ComplaintsList({ complaints }) {
        return (
            <div className="flex flex-col overflow-y-auto max-h-[calc(100vh-200px)] bg-gray-200">
                {complaints.map((complaint, index) => (
                    <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-lg">
                        {/* Display the username */}
                        <h3 className="text-gray-800 font-medium mb-2">{complaint.username}</h3>
                        <h2 className="text-xl mb-2 font-semibold">{complaint.issue}</h2>
                        <div className='mt-1 text-black text-sm mb-2'>
                            <p className='text-sm'>{complaint.description}</p>
                            <p className='text-xs'>{complaint.time}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="mb-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-white ${getBadgeClass(complaint.progress)}`}>
                                    {getProgressText(complaint.progress)}
                                </span>
                            </div>
                            {complaint.progress <= 66 && (
                                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                    Resolved
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

function getBadgeClass(progress) {
        if (progress <= 33) return 'bg-red-500';
        if (progress <= 66) return 'bg-yellow-500';
        return 'bg-green-500';
    }

    function getProgressText(progress) {
        if (progress <= 33) return 'Submitted';
        if (progress <= 66) return 'In Progress';
        return 'Done';
    }

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen bg-gray-200">
            {/* Work in Progress */}
            <div className="w-full lg:w-1/3 p-4">
                <button onClick={() => setShowInProgress(!showInProgress)} className="lg:hidden mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-between">
                    Work in Progress
                    <span>{showInProgress ? '▲' : '▼'}</span>
                </button>

                {(showInProgress || window.innerWidth >= 1024) && (
                    <>
                        <h2 className="hidden lg:block text-2xl mb-4">Work in Progress</h2>
                        <ComplaintsList complaints={defaultComplaints.filter(complaint => complaint.progress > 33 && complaint.progress <= 66)} />
                    </>
                )}
            </div>

            {/* Completed */}
            <div className="w-full lg:w-1/3 p-4">
                <button onClick={() => setShowCompleted(!showCompleted)} className="lg:hidden mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-between">
                    Completed
                    <span>{showCompleted ? '▲' : '▼'}</span>
                </button>

                {(showCompleted || window.innerWidth >= 1024) && (
                    <>
                        <h2 className="hidden lg:block text-2xl mb-4">Completed</h2>
                        <ComplaintsList complaints={defaultComplaints.filter(complaint => complaint.progress > 66)} />
                    </>
                )}
            </div>

            {/* Notice Form */}
            < div className="w-full lg:w-1/3 p-4 mt-10 lg:mt-0" > {/* Added `mt-10` for margin-top */}
                < h2 className="text-2xl mb-4" > Notice</h2 >
                <form className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-bold mb-2">Title:</label>
                        <input type="text" id="title" name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter title" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label>
                        <textarea id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter description"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add Notice
                    </button>
                </form>
            </div >

        </div >
    );
}

const defaultComplaints = [
    {
        username: "@Parth",
        issue: "Water problem",
        description: "KJHKJHKJHK",
        progress: 75,
        time: "1 day ago",
        status: "In Progress"
    },
    {
        username: "@Parth",
        issue: "Water",
        description: "KJHKJHKJHK",
        progress: 40,
        time: "2 days ago",
        status: "Done"
    },
    {
        username: "@Utkarsh",
        issue: "Water",
        description: "KJHKJHKJHK",
        progress: 40,
        time: "2 days ago",
        status: "Done"
    },
    {
        issue: "Water",
        description: "KJHKJHKJHK",
        progress: 40,
        time: "2 days ago",
        status: "Done"
    },
];

export default AuthorityComplain;
