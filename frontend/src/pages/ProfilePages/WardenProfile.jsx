import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

const WardenProfile = () => {
  const [counts, setCounts] = useState({
    pending: 0,
    escalated: 0,
    solved: 0,
  });

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchComplaintCounts = async () => {
      const { hostel_name } = currentUser;
      try {
        const pendingResponse = await axios.get(`http://localhost:8800/api/complain/countHostelComplaints?hostel=${hostel_name}&status=Pending`);
        const escalatedResponse = await axios.get(`http://localhost:8800/api/complain/countHostelComplaints?hostel=${hostel_name}&status=Escalated`);
        const solvedResponse = await axios.get(`http://localhost:8800/api/complain/countHostelComplaints?hostel=${hostel_name}&status=Solved`);

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

export default WardenProfile