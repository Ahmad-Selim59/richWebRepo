import React from "react";

const Note = (props) => {

    return(
        <div>
            <div style={{backgroundColor: props.text.color, width: "40%"}}>{props.text.noteText}</div>
            <input type={"button"} value={"Edit Note"} onClick= {() => {props.edit(props.text.id)}}></input>
            <input type={"button"} value={"Delete Note"} onClick= {() => {props.delete(props.text.id)}}></input>
            <input type={"button"} value={"blue"} onClick= {() => {props.changeColor(props.text.id, "blue")}}></input>
            <input type={"button"} value={"white"} onClick= {() => {props.changeColor(props.text.id, "white")}}></input>
            <input type={"button"} value={"green"} onClick= {() => {props.changeColor(props.text.id, "green")}}></input>
            <input type={"button"} value={"red"} onClick= {() => {props.changeColor(props.text.id, "red")}}></input>
        </div>
    )
}


export default Note;