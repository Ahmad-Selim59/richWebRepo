import './App.css';
import React, { useState } from 'react';
import Note from './Note';

const App = () => {

  const [userInput, setuserInput] = useState("");
  const [notes, setNote] = useState([]);
  const [id, setId] = useState(0);

  const addNote = () => {
    if(userInput === ""){
      alert("note cant be blank");
    }else{
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
  }

  const DeleteNote = (noteId) => {
    console.log("delete is being called" + noteId)
    // loop through each note, returning every note, but the one clicked
    setNote(note => [...note.filter(note => 
      note.id !== noteId)]);
  }

  const EditNote = (noteId) =>{
    console.log("edit is being called" + noteId)
    // enter in new note
    let newInput = prompt("enter in editted note");
    // error checking
    if(newInput === ""){
      alert("note cant be blank");
    }else{
      // loop through each note, until find one thats clicked
      setNote(notes => [...notes.map(note =>{
        if(note.id === noteId){
          // set message to input from prompt
          note.noteText = newInput;
        }
        return note;
      }) ]); 
    }
    
  }

  const changeColor = (id,color) =>{
    //console.log("colour function is being called")
    // loop through each note, and set color to color being passed
    setNote(notes => notes.map(note =>{
      if(note.id === id){
        //console.log("colour function is being called2")
        note.color = color;
      }
      //console.log("colour function is being called3")
      return note;
    }) ); 
  }
  

  //on change function
  function handleChange(event) {
    //console.log(event.target.value);
    setuserInput(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} type={"text"} placeholder={"Enter a Note Here"}></input>
      <input type={"button"} value={"Add Note"} onClick={addNote}></input>

      {notes.map( e =>
          <Note text={e} delete = {DeleteNote} edit = {EditNote} changeColor = {changeColor}></Note>
        )}
      
    </div>
  );
}

export default App;
