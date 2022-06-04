var quizQuestions = [
  {
    num: 1,
    question: "HTML stand for",
    Option: {
      a: "Hyper text markup Language",
      b: "Hyper text programming Language",
      c: "Hyper text styling Language",
      d: "Hyper text scripting Language",
    },
    answer: "Hyper text markup Language",
  },
  {
    num: 2,
    question: "Which type of JavaScript Languages is",
    Option: {
      a: "Object-Oriented ",
      b: "Object-Base",
      c: "Assembly Languages",
      d: "high Level",
    },
    answer: "Object-Base",
  },
  {
    num: 3,
    question: "The 'function' and  'var' are known as:",
    Option: {
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
    },
    answer: "Declaration statements",
  },
  {
    num: 4,
    question: "who is the present president of pakistan",
    Option: {
      a: "Arif Alvi",
      b: "Imran Khan",
      c: "Nawaz Sharif",
      d: "Zardari",
    },
    answer: "Arif Alvi",
  },
  {
    num: 5,
    question: "How many prayers in a day:",
    Option: {
      a: "6",
      b: "5",
      c: "3",
      d: "none",
    },
    answer: "5",
  },
  {
    num: 6,
    question: "How many total surah in quran",
    Option: {
      a: "113",
      b: "114",
      c: "112",
      d: "111",
    },
    answer: "114",
  },
  {
    num: 7,
    question: "The correct sequence of HTML tags for starting a webpage is",
    Option: {
      a: "Head, Title, HTML, body",
      b: "HTML, Body, Title, Head",
      c: "HTML, Head, Title, Body",
      d: "HTML, Title , Head,  Body",
    },
    answer: "HTML, Head, Title, Body",
  },
];

var htmlQuestion = document.getElementById("htmlQuestion");
var htmlOptionLists = document.getElementsByClassName("htmlOptionList");
// console.log(quizQuestions[0].question);
// console.log(htmlOptionLists);
var nextQuesBtn = document.getElementById("nextQuesBtn");
var counterValue = document.getElementById("counterValue");
var quizBox = document.getElementById("quizBox");
var counter = 0;
var score = 0;
var resultValue = document.getElementById("resultValue");

function setQuestion() {
  htmlQuestion.innerHTML = quizQuestions[counter].question;
  htmlOptionLists[0].innerHTML = quizQuestions[counter].Option.a;
  htmlOptionLists[1].innerHTML = quizQuestions[counter].Option.b;
  htmlOptionLists[2].innerHTML = quizQuestions[counter].Option.c;
  htmlOptionLists[3].innerHTML = quizQuestions[counter].Option.d;
}

function nextQes() {
  counter++;

  console.log(counter);
  if (counter < quizQuestions.length) {
    setQuestion();
    counterValue.innerHTML = counter + 1 + " / " + quizQuestions.length;
  } else {
    console.log("hello");
    quizBox.style.display = "none";
    resultValue.className = "show";
    resultValue.innerHTML = score;
  }
  //  if(counter< quizQuestions.length)
  nextQuesBtn.className = "hide";

  for (var i = 0; i < htmlOptionLists.length; i++) {
    htmlOptionLists[i].classList.remove("disabled");
    htmlOptionLists[i].style.backgroundColor = "lightgrey";
  }
}
function checkAns(e) {
  //   console.log(e.innerHTML == quizQuestions[counter].answer);
  nextQuesBtn.className = "show";
  if (e.innerHTML == quizQuestions[counter].answer) {
    score += 10;
    console.log(score);
    e.style.backgroundColor = "green";
  } else {
    e.style.backgroundColor = "red";

    for (var i = 0; i < htmlOptionLists.length; i++) {
      if (htmlOptionLists[i].innerHTML == quizQuestions[counter].answer) {
        htmlOptionLists[i].style.backgroundColor = "green";
      }
    }
  }

  for (var i = 0; i < htmlOptionLists.length; i++) {
    htmlOptionLists[i].className += " disabled";
  }
}
