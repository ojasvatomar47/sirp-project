import React from 'react';

function Sidebar({ complaints = defaultComplaints, isSidebarVisible }) {
    return (
        <div className={`flex flex-col flex-no-wrap w-full sm:w-64 md:w-1/4 lg:w-1/4 h-screen p-4 bg-gray-100 overflow-y-auto transform ${isSidebarVisible ? '' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 z-40`}>
            <h1 className="text-3xl font-bold mb-6 text-black">Previous Complaints</h1>
            {complaints.map((complaint, index) => (
                <div
                    key={index}
                    className="mb-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 space-y-2"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">{complaint.issue}</h2>
                        <span className={`inline-block px-4 py-1 rounded-full text-sm text-white ${getBadgeClass(complaint.progress)}`}>
                            {getProgressText(complaint.progress)}
                        </span>
                    </div>
                    <p className='text-xs text-gray-500 font-semibold'>{complaint.username}</p>
                    <div className='text-black text-sm'>
                        <p className='text-sm truncate w-[150px]'>
                            {complaint.description}
                        </p>
                        <p className='text-xs mt-1'>{complaint.time}</p>
                    </div>
                    <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2`}>
                        <button className="bg-blue-500 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-blue-600 transition-colors duration-200">
                            Forward to Warden
                        </button>
                        <button className="bg-teal-500 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-teal-600 transition-colors duration-200">
                            Upgrade
                        </button>
                        <button className="bg-red-600 text-white w-full sm:w-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded shadow-sm hover:shadow-md hover:bg-red-700 transition-colors duration-200">
                            Delete
                        </button>
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

const defaultComplaints = [
    {
        username: "@Parth",
        issue: "Water problem",
        description: "KJHKJHKJHkfndsflkgnkdfngkndflkgnlksndblkndflnglkdfnlndlnilnionnklniK",
        progress: 75,
        time: "1 day ago",
        status: "In Progress"
    },
    {
        username: "@Parth",
        issue: "Water",
        description: "KJHKJHKJHKdfystyhftsysysyertertytyyyyy",
        progress: 40,
        time: "2 days ago",
        status: "Done"
    },
    {
        username: "@Utkarsh",
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
    },
    {
        username: "@Darpan",
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
    },
    {
        username: "@Utkarsh",
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
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
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
    },
    {
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
    },
    {
        issue: "Water",
        description: "KJHKJHKJHK",
        progress: 40,
        time: "2 days ago",
        status: "Done"
    },
    {
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
    },
    {
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
    },
    {
        issue: "Wi-Fi Outage",
        description: "KJHKJHKJHK",
        progress: 20,
        time: "3 hours ago",
        status: "Submitted"
    },
];

export default Sidebar;
