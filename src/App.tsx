import React, { useState, ChangeEvent } from 'react';

import './App.css';
import UserInputComponent from './components/userInputComponent'
import UserOutputComponent from './components/userOutputComponent'
import ValidationComponent from './components/validationComponent'
import ShareFileComponent from './components/shareFileButton/shareFileComponent'

function App() {
  const [userInp, setuserInp] = useState('priyam')
  
  const InpLength = userInp.length;
  const changeInput = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event)

    setuserInp(event.target.value)
  }
  return (
    <div className="App">
      <UserInputComponent  title={userInp} changed={changeInput}></UserInputComponent>
      <UserOutputComponent title={userInp}></UserOutputComponent>
      <ValidationComponent size={InpLength}></ValidationComponent>
      <ShareFileComponent></ShareFileComponent>
      
    </div>
  );
}

export default App;
