const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


window.setInterval(function runClock(){
  var currentDate = new Date();

  let hour = currentDate.getHours();
  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();

  let secPosition = sec * 6;
  let minPosition = min * 6;
  let hourPosition = (hour * 30) + (minPosition/12);

  if(secPosition == 0){
    secPosition = 60 * 6;

  }

  HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}, 1000);
