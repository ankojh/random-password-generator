import React, { useRef, useState } from 'react';
import './Password.css'


let copiedTimeout = null;

const Password = (props) => {
  const [copiedState, setCopiedState] = useState(false)


  const password = props.password ? props.password : '';
  const passwordEl = useRef();


  function passwordOnChange(keyboardEvent){
    props.onChange && props.onChange(keyboardEvent);
  }

  function copyPasswordToClipboard() {
    if(passwordEl && passwordEl.current){
      setCopiedState(true);
      passwordEl.current.select();
      passwordEl.current.setSelectionRange(0, 99999);
      document.execCommand("copy");
      clearTimeout(copiedTimeout);
      copiedTimeout = setTimeout(() => {
        setCopiedState(false);
      }, 2000);
    }
  }

  return (
    <div className="App-Password">
      <input ref={passwordEl} onChange={passwordOnChange} value={password} />
      <button className="obama-grad" onClick={copyPasswordToClipboard}>Copy</button>
      <span style={{ visibility: copiedState ? 'visible' : 'hidden'}}> Copied! </span>
    </div>
  );
};

export default Password;