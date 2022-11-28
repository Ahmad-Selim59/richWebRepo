const {
    takeWhile,
    finalize,
    interval,
    fromEvent
  } = rxjs;
  
  let startButton = document.getElementById("startButton");
  const startButtonClick = fromEvent(startButton,"click");
  startButtonClick.subscribe(() => time());
  
  //interval for the timer
  const timerInterval = interval(1000);
  
  let TimerDiv = document.getElementById("DisplayTimeCountdown");
  let totalTime = 0;
  let initialValue = 0;
  let currentValue = 0;
  
  //let interval;
  const time = () => {
      clearInterval(interval);
      //read in inputs
      let hours = document.getElementById("hours").value;
      let minutes = document.getElementById("minutes").value;
      let seconds = document.getElementById("seconds").value;
      //find out how many seconds it is in total
      totalTime = parseInt(hours * 60 * 60) + parseInt(minutes * 60) + parseInt(seconds);
  
      currentValue = totalTime;
  
  };