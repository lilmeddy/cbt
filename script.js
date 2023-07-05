// the cbt assignment
// for questions that you read through
// for answers that you read through
// for correct answer
let home = document.getElementById("home");
let quest = document.getElementById("quest");
let option = document.getElementById("option");
let ans = document.getElementById("ans");
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
    }
    if (min === 0 && second === 30) {
      time.style.color = "red";
    }
    second--;
  }, 1000);
}
count(1);
let mede = [
  {
    question: "What is the name of your instructor",
    options: ["Mr Daniel ", "Mr Johnson", "Mr Adam", "Mr Ire"],
    answer: "Mr daniel",
  },
  {
    question: "What is the name of my college",
    option: ["COHES ", "COAES", "COCCS", "COSMS"],
    answer: "COCCS",
  },
  {
    question: "The computing association is :",
    options: ["NACOS", "NAMACOS", "BUTH", "BUPAF"],
    answer: "NACOS",
  },
  {
    question: "Are you stupid",
    options: ["Yes", "Same as A", "option A and B", "option C"],
    answer: "option C",
  },
  {
    question: "Righteousness doesn't have sense",
    options: [
      "Yes isn't it obvious",
      "Normal nau",
      "Like for real he doesn't have",
      "He lack sense",
    ],
    answer: "Like for real he doesn't have",
  },
  {
    question: "Idowu Ebun Abisayo is a stupid girl",
    options: ["Yes", "Same as A", "option C", "option A and B"],
    answer: "option C",
  },
  {
    question: "3**3 is",
    options: ["19", "9", "33", "27"],
    answer: "27",
  },
];
