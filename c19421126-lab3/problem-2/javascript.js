let startButton = document.getElementById("startButton");
/*
rxjs.fromEvent(startButton, 'click')
    .subscribe(() => timer()
);
*/

let TimerDiv = document.getElementById("DisplayTimeCountdown");
let totalTime = 0;

function timer(){
    //read in inputs
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;

    //find out how many seconds it is in total
    totalTime = parseInt(hours * 60 * 60) + parseInt(minutes * 60) + parseInt(seconds);

}
