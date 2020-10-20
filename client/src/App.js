import React, { useEffect, useState } from 'react';
import './App.css';
import Option from './components/option/Option';
import Password from './components/password/Password';
import { DEFAULT_PASSWORD_LENGTH } from './constants/password';
import PrimaryButton from './components/primaryButton/PrimaryButton';
import { generateRandomPassword } from './utils/password';


const PASSWORD_OPTIONS = [ //! move to constants
  { key: 'includeNumbers', text: 'Numbers' },
  { key: 'includeUpperCaseAlphabets', text: 'Uppercase Characters' },
  { key: 'includeLowerCaseAlphabets', text: 'Lowercase Characters' },
  { key: 'includeSpecialCharacters', text: 'Special Characters' }
]

function App() {

  const [state, setState] = useState({
    passwordLength: DEFAULT_PASSWORD_LENGTH,
    includeUpperCaseAlphabets: false,
    includeLowerCaseAlphabets: false,
    includeNumbers: true,
    includeSpecialCharacters: false
  });

  const [currentPassword, setCurrentPassword] = useState('');

  useEffect(()=>{
    generatePassword();
  },[])

  
  function generatePassword() {
    const generatedPassword = generateRandomPassword({
      length: state.passwordLength,
      numbers: state.includeNumbers,
      upperCase: state.includeUpperCaseAlphabets,
      lowerCase: state.includeLowerCaseAlphabets,
      special: state.includeSpecialCharacters
    })

    setCurrentPassword(generatedPassword);
  }

  function optionChanged(key) {
    setState({ ...state, [key]: !state[key] })
    generatePassword();
  }

  function passwordChangedByUserInput(event) {
    setCurrentPassword(event.target.value);
  }

  function passwordLengthChanged(newLength){
    setState({ ...state, passwordLength: newLength})
    generatePassword();
  }



  return (
    <div className="App">
      <h1 className="App-Heading">Random Password Generator</h1>
      <div className="App-Options">
        {
          PASSWORD_OPTIONS.map(option =>
            <Option
              key={option.key}
              id={option.key}
              text={option.text}
              state={state[option.key]}
              onClick={optionChanged}
            />)
        }
      </div>
      <div className="App-Length-Option">
        <input 
          className="obama-grad"
          type="range" 
          min="4" 
          max="16" 
          value={state.passwordLength}
          onChange={e => passwordLengthChanged(parseInt(e.target.value))} />

        <span>Password Length: {state.passwordLength}</span>
      </div>
      <Password onChange={passwordChangedByUserInput} password={currentPassword} />
      <PrimaryButton onClick={generatePassword}>Regenerate</PrimaryButton>
    </div>
  );
}

export default App;
