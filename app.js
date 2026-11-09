let sec = 0;
let min = 0;
let hour = 0;
let timer = null;
const display = document.querySelector("h2");

function run() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min += 1;
    if (min == 60) {
      min = 0;
      hour += 1;
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  display.innerHTML = h + ":" + m + ":" + s;
}

function start() {
  if (timer !== null) {
    timer = clearInterval(timer);
  }
  timer = setInterval(run, 1000);
}

function stop() {
  timer = clearInterval(timer);
}
function reset() {
  timer = clearInterval(timer);
  timer = null;
  hour = 0;
  sec = 0;
  min = 0;
  display.innerHTML = "00:00:00";
}
