import React from 'react';

const UserOutput = props => {
  return (
    <div>
      <p>Hi I'm {props.username}</p>
      <p>bio goes here</p>
    </div>
  );
}

export default UserOutput;