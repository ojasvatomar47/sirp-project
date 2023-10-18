import React from 'react';

function Sidebar({ complaints = defaultComplaints }) {
    return (
        <div className="flex flex-col flex-no-wrap w-1/4 h-screen bg-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 overflow-y-auto">
            {complaints.map((complaint, index) => (
                <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-lg">
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
                        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                            Forward to Warden
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
        issue: "Water problem",
        description: "KJHKJHKJHK",
        progress: 75,
        time: "1 day ago",
        status: "In Progress"
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