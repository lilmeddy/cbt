// the cbt assignment
// for questions that you read through
// for answers that you read through
// for correct answer
let home = document.getElementById("home");
let cbt = document.getElementById("cbt");
let time = document.getElementById("time");
cbt.style.display = "none";
function myStart() {
  home.style.display = "none";
  cbt.style.display = "block";
}
function count(min) {
  let second = 60;
  let interval = setInterval(() => {
    time.innerHTML = min + ":" + (second < 10 ? "0" : "") + second;
    if (second === 0) {
      second = 60;
      min--;
      if (min < 0) {
        clearInterval(interval);
        cbt.style.display = "none";
        home.style.display = "block";
      }
      if (min === 0 && second === 30) {
        time.style.color = "red";
      }
    }
    second--;
  }, 1000);
}
count(1);
