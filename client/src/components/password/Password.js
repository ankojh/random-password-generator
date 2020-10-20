import React, { useState } from 'react';
import './Password.css'


let copiedTimeout = null;

const Password = (props) => {
  const [copiedState, setCopiedState] = useState(false)


  const password = props.password ? props.password : '';


  function passwordOnChange(keyboardEvent){
    props.onChange && props.onChange(keyboardEvent);
  }

  function copyPasswordToClipboard() {
    setCopiedState(true);
    clearTimeout(copiedTimeout);
    copiedTimeout = setTimeout(() => {
      setCopiedState(false);
    }, 2000);
  }

  return (
    <div className="App-Password">
      <input onChange={passwordOnChange} value={password} />
      <button className="obama-grad" onClick={copyPasswordToClipboard}>Copy</button>
      {copiedState && <span> Copied! </span>}
    </div>
  );
};

export default Password;