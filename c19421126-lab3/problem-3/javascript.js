let colors = ["Aqua", "Green", "Red", "Purple"];
let addButton = document.getElementById("AddNote");

rxjs.fromEvent(addButton, 'click')
    .subscribe(() => addNote()
);

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
        
        let addChild = document.createElement("button")
        addChild.className = "NoteButton";
        addChild.innerHTML = "add Child";
        div.appendChild(addChild);
        rxjs.fromEvent(addChild, 'click')
            .subscribe(() => addingChildFunction()
        );
        function addingChildFunction(){
            let childDiv = document.createElement("div");
            let deleteChild = document.createElement("button")
            deleteChild.className = "NoteButton";
            deleteChild.innerHTML = "Delete child";
            
            
            //console.log("adding child test");
            childDiv.innerHTML="Enter in subnote";
            childDiv.contentEditable = true;
            div.appendChild(childDiv);
            childDiv.appendChild(deleteChild);
            rxjs.fromEvent(deleteChild, 'click')
            .subscribe(() => deletingFunction(childDiv)
            );


            let add2Child = document.createElement("button")
            add2Child.className = "NoteButton";
            add2Child.innerHTML = "add child";
            childDiv.appendChild(add2Child);
            rxjs.fromEvent(add2Child, 'click')
            .subscribe(() => creatingSecondChild()
            );
            //document.getElementById("note").appendChild("childDiv");
        
            function creatingSecondChild(){
                let child2Div = document.createElement("div");
                //console.log("adding child test");
                child2Div.innerHTML="Enter in subnote";
                child2Div.contentEditable = true;
                childDiv.appendChild(child2Div);
                let delete2Child = document.createElement("button")
                delete2Child.className = "NoteButton";
                delete2Child.innerHTML = "Delete child";
                child2Div.appendChild(delete2Child);
                rxjs.fromEvent(delete2Child, 'click')
                .subscribe(() => deletingFunction(child2Div)
                );
            }
    
        }

       
        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete";
        rxjs.fromEvent(deleteButton, 'click')
            .subscribe(() => deletingFunction(div)
        );
        function deletingFunction(deleteDiv){
            deleteNote(deleteDiv)
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