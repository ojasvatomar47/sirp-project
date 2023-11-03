import React from 'react';
import ProfileDetails from '../components/ProfileDetails';
import BodyDetails from '../components/BodyDetails';
import '../components/profile.css';
import Newsidebar from '../components/Newsidebar'




export default function ProfilePage() {
  return (
    <>
     <div className="flex flex-col md:flex-row">
     <div className="upc md:w-2/5 md:pr-4">
        <div className="gradiant"></div>

        <div className="profiledown">
          <img src="userlogo.png" alt="" />
          <div className="main">

            <ProfileDetails 
              name="Nihal Mohammad Ali"
              rollNo="22BCS170" 
            />
          </div>

          <div className="profile-title">  
            <BodyDetails
            HostelName="Vasishtha Hostel"
            HostelId="H4F32"
            RoomNo="F-202"
            Dob="07-10-2003"
            MailId="22bcs170@iiitdmj.ac.in"
            CaretakerName="Ramnivas Mishra"
            CaretakerMail="rm@iiitdmj.ac.in"
            WardenName="Pankaj Sharma"
            WardenMail="pkj@iiitdmj.ac.in"
            />
          </div>

        
        </div>
      </div>
      <Newsidebar className="md:w-3/5"/>
     </div>
    </>
  );
}
