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

    let currentDate = new Date();
    //console.log(currentDate);
    let hourGoal = Number(currentDate.getHours()) + Number(hours);
    let minuteGoal = Number(currentDate.getMinutes()) + Number(minutes);
    let secondGoal = Number(currentDate.getSeconds()) + Number(seconds);
    /*console.log(hourGoal);
    console.log(minuteGoal);
    console.log(secondGoal);*/
    //this is the time which the timer will stop at
    let timerGoal = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hourGoal, minuteGoal, secondGoal);
    //console.log(timerGoal);

    let currentTime = currentDate.getTime();
    let timerGoalParsed = timerGoal.getTime();
    console.log(currentTime);
    console.log(timerGoalParsed);
    let remaining = timerGoalParsed - currentTime;
    console.log(remaining);

}