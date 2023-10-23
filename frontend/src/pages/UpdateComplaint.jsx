import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import axios from 'axios'

const UpdateComplaint = () => {

    const { currentUser } = useContext(AuthContext)

    const { complain_id } = useParams()

    const [updatedTitle, setUpdatedTitle] = useState('')

    const [updatedDescription, setUpdatedDescription] = useState('')

    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:8800/api/complain/${complain_id}`, {
                title: updatedTitle,
                description: updatedDescription,
                role: currentUser.role,
                status: currentUser.status
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                <h2>Update Complaint</h2>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                    />
                </div>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default UpdateComplaint