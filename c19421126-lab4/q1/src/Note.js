import React from "react";

const Note = (props) => {

    return(
        <div>
            <div>{props.text.noteText}</div>
            <input type={"button"} value={"Edit Note"}></input>
            <input type={"button"} value={"Delete Note"} onClick= {() => {props.delete(props.text.id)}}></input>
        </div>
    )
}


export default Note;