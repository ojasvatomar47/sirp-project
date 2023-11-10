import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const BodyDetails = (props) => {

  const { currentUser} = useContext(AuthContext)

  return (
    <div className='alldetails flex flex-col justify-center items-center gap-8 py-6 w-full rounded-xl shadow-lg border-[3px] border-t-teal-500 border-l-teal-500'>

      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Name :</span>  {props.Name}</span>
      {currentUser.role==='student' && (<span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Username :</span>  {props.Username}</span>)}
      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Hostel :</span>  {props.HostelName} Hostel</span>
      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Email :</span>{props.MailId}</span>
      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Role :</span>{props.Role}</span>
      {currentUser.role==='student' && (<span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Warden Name : </span>{props.WardenName}</span>)}
      {currentUser.role==='student' && (<span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Warden Mail Id :</span>{props.WardenMail}</span>)}
      {currentUser.role==='student' && (<span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Caretaker Name :</span>{props.CaretakerName}</span>)}
      {currentUser.role==='student' && (<span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Caretaker Mail Id :</span>{props.CaretakerMail}</span>)}
      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Registered Complaints :</span>{props.Total}</span>
      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Pending Complaints :</span>{props.Pending}</span>
      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Resolved Complaints :</span>{props.Solved}</span>
      <span className='text-xl flex gap-10 font-lora'><span className='text-2xl font-alveria'>Escalated Complaints :</span>{props.Escalated}</span>


    </div>
  )
}

export default BodyDetails