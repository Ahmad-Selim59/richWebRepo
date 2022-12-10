import './App.css';
import React, { useState } from 'react';
import Note from './Note';

const App = () => {

  const [userInput, setuserInput] = useState("");
  const [notes, setNote] = useState([]);
  const [id, setId] = useState(0);

  const addNote = () => {
    let addedNote = {
      noteText: userInput, 
      id: id,
      color: "white"
    }
    setId(id + 1)
    // cannot use push, use spread operator [...oldarray, newelement]
    setNote(note => [...note, addedNote])
    console.log(notes)
  }

  //on change function
  function handleChange(event) {
    console.log(event.target.value);
    setuserInput(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} type={"text"} placeholder={"Enter a Note Here"}></input>
      <input type={"button"} value={"Add Note"} onClick={addNote}></input>
      
    </div>
  );
}

export default App;
