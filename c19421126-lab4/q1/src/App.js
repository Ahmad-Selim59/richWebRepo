import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [userInput, setuserInput] = useState("");

  //on change function
  function handleChange(event) {
    console.log(event.target.value);
    setuserInput(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} type={"text"} placeholder={"Enter a Note Here"}></input>
      
      
    </div>
  );
}

export default App;
