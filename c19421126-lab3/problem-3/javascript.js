let colors = ["Aqua", "Green", "Red", "Purple"];
let addButton = document.getElementById("AddNote");
rxjs.fromEvent(addButton, 'click')
    .subscribe(() => addNote()
);


/*
const addButton = document.getElementById("AddNote");
const addButtonClicked = Rx.Observable.fromEvent(addButton,"click");
addButtonClicked.subscribe(() => addNote());
*/

function addNote() {

    let userInput = document.getElementById("UserInput");
    //make sure that the user doesnt upload empty note
    if (userInput.value == "")
        alert("Please enter a note");
    else {
        let list = document.getElementById("NoteList");
        let div = document.createElement("div");
        div.className = "Notes";

        let note = document.createElement("li");
        let noteText = document.createTextNode(userInput.value);
        note.appendChild(noteText);
        div.appendChild(note);

        let editButton = document.createElement("button")
        editButton.innerHTML = "Edit";
        rxjs.fromEvent(editButton, 'click')
            .subscribe(() => editingFunction()
        );
        function editingFunction(){
            editNote(noteText)
        }
        //editButton.onclick = function(){editNote(noteText)};
        editButton.className = "NoteButton";
        div.appendChild(editButton);

        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete";
        rxjs.fromEvent(deleteButton, 'click')
            .subscribe(() => deletingFunction()
        );
        function deletingFunction(){
            deleteNote(div)
        }
        //deleteButton.onclick = function(){deleteNote(div)}
        deleteButton.className = "NoteButton";
        div.appendChild(deleteButton);

        for (let i = 0; i < colors.length; i++)
        {
            let colorButton = document.createElement("button");
            colorButton.innerHTML = colors[i];
            colorButton.className = colorButton.innerHTML;
            rxjs.fromEvent(colorButton, 'click')
                .subscribe(() => changeColourFunction()
            );
            function changeColourFunction(){
                changeColour(div,colorButton.innerHTML)
            }
            //colorButton.onclick = function(){changeColour(div,colorButton.innerHTML)};
            div.appendChild(colorButton);
        }

        list.appendChild(div);
    }
}

function editNote(originalNote) {
    console.log(originalNote);
    let editedNote = prompt("Edit Note please");
    //making sure they entered something
    if(editedNote == "")
        alert("You entered nothing")
    else
        originalNote.nodeValue = editedNote;
}

function deleteNote(originalNote) {
    originalNote.remove();
}

function changeColour(note,colour) {
    note.style.backgroundColor = colour;
}