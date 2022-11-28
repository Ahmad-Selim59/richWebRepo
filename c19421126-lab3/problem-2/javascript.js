const {
    takeWhile,
    finalize,
    interval,
    fromEvent
  } = rxjs;
  
  let startButton = document.getElementById("startButton");
  startButton.addEventListener('click', () => {
      time();
    });

//interval for the timer
  const timerSource = interval(1000);
  
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
  
      interval = setInterval(() => {
          currentValue -= 1;
          if (currentValue <= 0) {
          currentValue = initialValue;
              clearInterval(interval);
          }
  
          //converting time display into hours, minutes and seconds 
          let hourRemaining = Math.floor(currentValue / 3600);
          let minuteRemaining = Math.floor(currentValue % 3600 / 60);
          let secondRemaining = Math.floor(currentValue % 3600 % 60);
          displayTimer = hourRemaining + " : " + ("0" + minuteRemaining).slice(-2) + " : " + ("0" + secondRemaining).slice(-2) ;
          
          TimerDiv.innerHTML = displayTimer;
      }, 1000);
  };