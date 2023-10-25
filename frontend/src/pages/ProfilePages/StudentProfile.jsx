import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

const StudentProfile = () => {

  const [counts, setCounts] = useState({
    pending: 0,
    escalated: 0,
    solved: 0,
  });

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {

    const fetchComplaintCounts = async () => {

      const { student_id } = currentUser

      try {

        const pendingResponse = await axios.get(`http://localhost:8800/api/complain/studentStatusComplains/:${student_id}?status=Pending`);
        const escalatedResponse = await axios.get(`http://localhost:8800/api/complain/studentStatusComplains/:${student_id}?status=Escalated`);
        const solvedResponse = await axios.get(`http://localhost:8800/api/complain/studentStatusComplains/:${student_id}?status=Solved`);

        setCounts({
          pending: pendingResponse.data,
          escalated: escalatedResponse.data,
          solved: solvedResponse.data,
        });

      } catch (error) {
        console.error(error);
      }
    };

    fetchComplaintCounts();
  }, []);

  return (
    <div>
      <div>
        <h2>Complaint Counts</h2>
        <p>Pending: {counts.pending}</p>
        <p>Escalated: {counts.escalated}</p>
        <p>Solved: {counts.solved}</p>
        <p>Total: {counts.pending + counts.escalated + counts.solved}</p>
      </div>
    </div>
  )
}

export default StudentProfile