import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'

const UpdateComplaint = () => {

    const { currentUser } = useContext(AuthContext)

    const { complain_id } = useParams()

    const [updatedTitle, setUpdatedTitle] = useState('')

    const [updatedDescription, setUpdatedDescription] = useState('')

    const navigate = useNavigate()

    const formatSubmissionDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateTimeString).toLocaleDateString(undefined, options);
        const time = new Date(dateTimeString).toLocaleTimeString();
        return `${date}`;
      };

    const handleUpdate = async (event) => {

        event.preventDefault()

        try {
            const res = await axios.put(`http://localhost:8800/api/complain/${complain_id}`, {
                title: updatedTitle,
                description: updatedDescription,
                role: currentUser.role,
                status: currentUser.status
            })
            console.log(res.data)
            const date = new Date()
            alert(`Complaint updated at ${formatSubmissionDateTime(date)}`)
            navigate(`/complaint/${complain_id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-center items-center font-lora'>
            <div className={
                "bg-gradient-to-tl from-teal-200 to-[#fff3f3] p-4 sm:p-6 md:p-8 lg:p-10 border-[3px] border-t-teal-600 border-b-teal-600" +
                "ml-4 sm:ml-6 md:ml-11 lg:ml-20 mr-4 sm:mr-6 md:mr-11 lg:mr-20 mx-auto mt-10 sm:mt-14 md:mt-20 lg:mt-24 " +
                "rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-4/5 md:w-2/3 lg:w-3/4"
            }>
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center text-gray-800">
                    Hi <span className='underline'>{currentUser.name}</span>, feel free to update your complaint
                </h1>
                <form onSubmit={handleUpdate}>
                    <div className="mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                        <label className="block text-lg lg:text-xl font-medium text-gray-700" htmlFor="title">Title:</label>
                        <input
                            className="mt-1 p-2 sm:p-2.5 md:p-3 lg:p-4 w-full border rounded-md transition-shadow focus:shadow-outline focus:outline-none"
                            id="title"
                            type="text"
                            value={updatedTitle}
                            placeholder="Enter Your Updated Complaint's Title"
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                        <label className="block text-lg lg:text-xl font-medium text-gray-700" htmlFor="description">Description:</label>
                        <textarea
                            className="mt-1 p-2 sm:p-2.5 md:p-3 lg:p-4 w-full border rounded-md transition-shadow focus:shadow-outline focus:outline-none"
                            id="description"
                            rows="3 sm:rows-3 md:rows-4 lg:rows-5"
                            value={updatedDescription}
                            placeholder="Describe Your Issue In Detail"
                            onChange={(e) => setUpdatedDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <button className="bg-teal-500 px-16 py-4 rounded-[4px] text-xl font-semibold text-white hover:bg-teal-700 transition ease-in-out delay-75"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateComplaint