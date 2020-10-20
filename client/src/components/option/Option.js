import React from 'react';
import './Option.css'

const Option = (props) => {
  return (
    <div className="App-Option">
      {props.text}
    </div>
  );
};

export default Option;