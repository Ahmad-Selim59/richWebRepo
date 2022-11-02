function AddContact() {
    let name = document.getElementById("contactName");
    let mobile = document.getElementById("mobileNumber");
    let email = document.getElementById("email");

    if(ValidateFormat(name,mobile,email))
    {
        //table with contacts
        let contactTable = document.getElementById("logs");

        let row = document.createElement("tr");
        //adding columns to the table
        let nameCol = document.createElement("td");
        nameCol.innerHTML = name.value;
        let numberCol = document.createElement("td");
        numberCol.innerHTML = mobile.value;
        let emailCol = document.createElement("td");
        emailCol.innerHTML = email.value;

        row.appendChild(nameCol);
        row.appendChild(numberCol);
        row.appendChild(emailCol);

        contactTable.appendChild(row);

        //clear input section after reading in data
        name.value = "";
        mobile.value = "";
        email.value = "";
    }

}

function Search() {
    let searched = document.getElementById("filter");
    let contactTable = document.getElementById("logs");
    let rows = contactTable.getElementsByTagName("tr");
    let noResult = document.getElementById("noResult");
    //itterate through the table
    for (let i = 0; i < contactTable.rows.length; i++) {
        let numbers = rows[i].getElementsByTagName("td")[1];
        //hide any row that is not part of the search
        if(numbers){
            if (numbers.innerHTML.indexOf(searched.value) > -1) {
                rows[i].style.display = "";
                noResult.innerHTML = "";
            } else {
                rows[i].style.display = "none";
                noResult.innerHTML = "No Result Found";
            }
        }
    }
}

//this is to alternate between sorting order
let sortOrder = true;
function sortNames() {
    console.log("1")
    let phonetable = document.getElementById("logs");
    let rows = phonetable.rows;

    let index;
    let row, nextRow;
    let continuee = true;

    while(continuee){
        console.log("2")
        continuee = false;
        let swap;
        //iterate through rows
        for(index = 1; index < (rows.length -1); index++){
            console.log("3")
            swap = false;
            row = rows[index].getElementsByTagName("TD")[0];
            nextRow = rows[index +1].getElementsByTagName("TD")[0];
            if(sortOrder){
                if(row.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()){
                    swap=true;
                    break;
                }
            }
            else{
                if(row.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()){
                    swap=true;
                    break;
                }
            }

        }
        if(swap){
            console.log("4")
            //swap rows 
            rows[index].parentNode.insertBefore(rows[index +1], rows[index]);
            continuee = true;
        }

    }

    if(sortOrder){
        sortOrder = false;
    }
    else{
        sortOrder = true;
    }

    
}

function ValidateFormat(name,phone,email) {

    let errordiv = document.getElementById("error")
    errordiv.innerHTML = "";
    //regex for fomrats for inputs
    let nameFormat = /^[a-zA-Z\s]+$/;
    let numFormat = /^[0-9]+$/;
    let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(name.value == "" || phone.value == "" || email.value == ""){
        errordiv.innerHTML = "Please fill in fields that are empty " + "<br/>";
        return 0;
    }
    //error checking for inputs
    if(nameFormat.test(name.value) == false){
        errordiv.innerHTML = errordiv.innerHTML + " Name can only contain letters from a to z " + "<br/>";
    }
    else if(name.value.length > 20){
        errordiv.innerHTML = errordiv.innerHTML + " Name can only be 20 characters long " + "<br/>";
    }

    if(numFormat.test(phone.value) == false){
        errordiv.innerHTML = errordiv.innerHTML + " mobile number can only contain numbers " + "<br/>";
    }
    else if(phone.value.length != 10){
        errordiv.innerHTML = errordiv.innerHTML + " mobile number can only be 10 digits " + "<br/>";
    }

    if(!emailFormat.test(email.value.toLowerCase())){
        errordiv.innerHTML = errordiv.innerHTML + " email needs to be in proper email format " + "<br/>";
    }
    else if (email.value.length > 39){
        errordiv.innerHTML = errordiv.innerHTML + " emails should be no more than 39 characters " + "<br/>";
    }
    // if no errors found return true, else false
    if(errordiv.innerHTML == ""){
        return true
    }
    else {
        return false;
    }

}