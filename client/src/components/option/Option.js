import React from 'react';
import './Option.css'

const Option = (props) => {
  function onClickHandler(){
  props.onClick && props.onClick(props.id)
  }

  return (
    <div 
      onClick={onClickHandler}
      className={`App-Option ${props.state ? 'option--active' : ''}`}>
      {props.text}
    </div>
  );
};

export default Option;