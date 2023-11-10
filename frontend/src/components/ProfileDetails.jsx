import React from 'react';
export default function ProfileDetails(props) {
  return (
    <div>
      <h2 className='text-4xl font-fontOne'>{props.name}</h2>
      <p className='font-fontTwo'>@{props.username}</p>
    </div>
  );
}
