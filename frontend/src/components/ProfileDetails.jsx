import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export default function ProfileDetails(props) {

  const { currentUser } = useContext(AuthContext)
  
  return (
    <div>
      <h2 className='text-4xl font-fontOne'>{props.name}</h2>
      {currentUser.role==='student' && (<p className='font-fontTwo'>@{props.username}</p>)}
    </div>
  );
}
