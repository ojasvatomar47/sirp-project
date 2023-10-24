import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function StudentComplain() {
    const [complaint, setComplaint] = useState({
        title: '',
        description: ''
    });
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Complaint submitted:', complaint);
    };

    return (
        <div className="w-screen h-screen flex items-start bg-gray-200 overflow-hidden relative">
            <button 
                onClick={() => setIsSidebarVisible(!isSidebarVisible)} 
                className="md:hidden absolute top-4 left-4 z-50 p-2 bg-white rounded-full"
            >
                {isSidebarVisible ? '←' : '→'}
            </button>

            <Sidebar isSidebarVisible={isSidebarVisible} />
            <div className={
                "bg-white p-4 sm:p-6 md:p-8 lg:p-10 " +
                "ml-4 sm:ml-6 md:ml-11 lg:ml-20 mr-4 sm:mr-6 md:mr-11 lg:mr-20 mx-auto mt-10 sm:mt-14 md:mt-20 lg:mt-24 " +
                "rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-4/5 md:w-2/3 lg:w-3/4"
            }>
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center text-gray-800">
                    Complaint Form
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                        <label className="block text-lg lg:text-xl font-medium text-gray-700" htmlFor="title">Title:</label>
                        <input
                            className="mt-1 p-2 sm:p-2.5 md:p-3 lg:p-4 w-full border rounded-md transition-shadow focus:shadow-outline focus:outline-none"
                            id="title"
                            type="text"
                            value={complaint.title}
                            placeholder="Enter complaint title..."
                            onChange={e => setComplaint({ ...complaint, title: e.target.value })}
                        />
                    </div>
                    <div className="mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                        <label className="block text-lg lg:text-xl font-medium text-gray-700" htmlFor="description">Description:</label>
                        <textarea
                            className="mt-1 p-2 sm:p-2.5 md:p-3 lg:p-4 w-full border rounded-md transition-shadow focus:shadow-outline focus:outline-none"
                            id="description"
                            rows="3 sm:rows-3 md:rows-4 lg:rows-5"
                            value={complaint.description}
                            placeholder="Describe the issue in detail..."
                            onChange={e => setComplaint({ ...complaint, description: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <button className="bg-blue-600 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg shadow-lg hover:shadow-xl active:bg-blue-700 focus:outline-none focus:shadow-outline transition-all"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentComplain;
