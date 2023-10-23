import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios';

const StudentsComplain = () => {

  const authContext = useContext(AuthContext)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {student_id, hostel_name, role }= authContext.currentUser

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with complaint data
    const newComplaint = {
      title,
      description,
      role,
      student_id,
      hostel_name,
    };

    console.log(newComplaint)

    // Send the complaint to the backend using Axios
    try {
      const res = await axios.post(`http://localhost:8800/api/complain`, newComplaint);
      console.log('Complaint submitted successfully:', res.data);
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }

    // Clear the input fields
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default StudentsComplain