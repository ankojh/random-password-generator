import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Option from './components/option/Option';
import Password from './components/password/Password';
import { DEFAULT_PASSWORD_LENGTH } from './constants/password';
import PrimaryButton from './components/primaryButton/PrimaryButton';


const PASSWORD_OPTIONS = [
  { key: 'includeNumbers', text: 'Numbers' },
  { key: 'includeUpperCaseAlphabets', text: 'UpperCase Characters' },
  { key: 'includeLowerCaseAlphabets', text: 'LowerCase Characters' },
  { key: 'includeSpecialCharacters', text: 'Special Characters' }
]

function App() {

  const [state, setState] = useState({
    currentPassword: '',
    passwordLength: DEFAULT_PASSWORD_LENGTH,
    includeUpperCaseAlphabets: false,
    includeLowerCaseAlphabets: false,
    includeNumbers: true,
    includeSpecialCharacters: false
  });

  function generatePassword() {

  }

  function optionChanged(key, value) {
    setState({ ...state, [key]: value })
    generatePassword();
  }


  return (
    <div className="App">
      <h1>Random Password Generator</h1>
      <div className="App-Options">
        {
          PASSWORD_OPTIONS.map(option =>
            <Option
              key={option.key}
              text={option.text}
              state={state[option.key]}
              onStateChange={optionChanged}
            />)
        }
      </div>
      <Password generatedPassword={state.currentPassword}/>
      <PrimaryButton onClick={generatePassword}>Regen</PrimaryButton>
    </div>
  );
}

export default App;
