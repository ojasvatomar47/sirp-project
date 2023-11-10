import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import ProfileDetails from "../../components/ProfileDetails";
import BodyDetails from "../../components/BodyDetails";
import "../../components/Profile.css";
import Sidebar from "../../components/Sidebar";
import avatar1 from "../../assets/avatars/boyAvatar.jpg";
import avatar2 from "../../assets/avatars/girlAvatar1.jpg";

const StudentProfile = () => {

  const [counts, setCounts] = useState({
    pending: 0,
    escalated: 0,
    solved: 0,
  });

  const { currentUser } = useContext(AuthContext)

  const [caretakerName, setCaretakerName] = useState('')
  const [caretakerEmail, setCaretakerEmail] = useState('')
  const [wardenName, setWardenName] = useState('')
  const [wardenEmail, setWardenEmail] = useState('')

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

  useEffect(() => {

    const { hostel_name } = currentUser

    const fetchCWDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/complain/caretakerWardenInfo`, { params: { hostelName: hostel_name } })
        setCaretakerName(res.data[0].caretaker_name)
        setCaretakerEmail(res.data[0].caretaker_email)
        setWardenName(res.data[0].warden_name)
        setWardenEmail(res.data[0].warden_email)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCWDetails()
  }, [])

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="upc md:w-2/5 md:flex-1">
          <div className="gradiant bg-gradient-to-b from-teal-300 to-white"></div>

          <div className="profiledown">
            <div>
              {currentUser.hostel_name==='Nagarjuna' || currentUser.hostel_name==='Maa Saraswati' ? (<img src={avatar2} alt="" />) : (<img src={avatar1} alt="" />)}
              <div className="main">
                <ProfileDetails name={currentUser.name} username={currentUser.username} />
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <div className="one flex-1 px-4">
              <BodyDetails
                Name={currentUser.name}
                Username={currentUser.username}
                HostelName={currentUser.hostel_name}
                MailId={currentUser.email}
                Role={currentUser.role}
                CaretakerName={caretakerName}
                CaretakerMail={caretakerEmail}
                WardenName={wardenName}
                WardenMail={wardenEmail}
                Pending={counts.pending}
                Solved={counts.solved}
                Escalated={counts.escalated}
                Total={counts.pending + counts.escalated + counts.solved}
              />
            </div>

            <Sidebar className='md:w-3/5 md:flex-1 flex-1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile