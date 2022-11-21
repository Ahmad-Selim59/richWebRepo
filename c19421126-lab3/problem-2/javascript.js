let startButton = document.getElementById("startButton");
/*
rxjs.fromEvent(startButton, 'click')
    .subscribe(() => timer()
);
*/

let totalTime = 0;

function timer(){
    //console.log("test")

    //read in inputs
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;

    //find out how many seconds it is in total
    totalTime = (hours * 60 * 60) + (minutes * 60) + seconds;
    //console.log(totalTime)

    let currentTime = new Date();
    //console.log(currentTime);
    let hourGoal = Number(currentTime.getHours()) + Number(hours);
    let minuteGoal = Number(currentTime.getMinutes()) + Number(minutes);
    let secondGoal = Number(currentTime.getSeconds()) + Number(seconds);
    /*console.log(hourGoal);
    console.log(minuteGoal);
    console.log(secondGoal);*/
    //this is the time which the timer will stop at
    let timerGoal = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hourGoal, minuteGoal, secondGoal);
    console.log(timerGoal);

}