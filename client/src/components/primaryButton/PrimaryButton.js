import React from 'react';

const PrimaryButton = (props) => {

  function onClickHandler(){
    props.onClick && props.onClick();
  }

  return (
    <button 
      onClick={onClickHandler}
      disabled={props.disabled}
      className="App-Primary-Button">
      {props.children}
    </button>
  );
};

export default PrimaryButton;