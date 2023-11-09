import React from 'react';
export default function ProfileDetails(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.rollNo}</p>
    </div>
  );
}
