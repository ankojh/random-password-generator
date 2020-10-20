import React from 'react';
import './Password.css'

const Password = (props) => {
  return (
    <div className="App-Password">
      <input value={props.password} />
    </div>
  );
};

export default Password;