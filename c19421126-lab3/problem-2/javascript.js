let startButton = document.getElementById("startButton");
/*
rxjs.fromEvent(startButton, 'click')
    .subscribe(() => timer()
);
*/

let TimerDiv = document.getElementById("DisplayTimeCountdown");
let totalTime = 0;

function timer(){
    console.log("function works")

    //read in inputs
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;

    totalTime = (hours * 60 * 60) + (minutes * 60) + seconds;
    console.log(totalTime)


}