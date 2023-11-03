import React from 'react'
import ProfileDetails from './ProfileDetails';

const BodyDetails = (props) => {
  return (
    <div className='alldetails'>
      
        <span><h1>Hostel Name :</h1>  {props.HostelName}</span>  
        <span><h1>Hostel Id :</h1>{props.HostelId} </span> 
        <span><h1>Room No : </h1>{props.RoomNo}</span>
        <span><h1>Date of Birth :</h1>{props.Dob} </span>
        <span><h1>Mail Id :</h1>{props.MailId}</span> 
        <span><h1>Warden Name : </h1>{props.WardenName}</span>
        <span><h1>Warden Mail Id :</h1>{props.WardenMail}</span>
        <span><h1>Caretaker Name :</h1>{props.CaretakerName}</span> 
        <span><h1>Caretaker Mail Id :</h1>{props.CaretakerMail}</span>

      
    </div>
  )
}

export default BodyDetails
