function clock() {
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minute");

  let seconds = document.getElementById("second");

  let shifts = document.getElementById("shift");
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";
  if (h > 12) {
    h -= 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  shifts.innerHTML = ampm;
}

setInterval(clock, 1000);
