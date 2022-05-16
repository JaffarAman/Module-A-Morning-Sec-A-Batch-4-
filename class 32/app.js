// function foo(e) {
//   //   alert("hello class...");
//   //   console.log("helloooooo");
//   console.log("mouse in", e);
// }

// var userInput = document.getElementById("userinput");
// function getValue() {
//   console.log(userInput.value);
// }

// function setValue() {
//   //   var userInput = document.getElementById("userinput");
//   console.log(userInput);
//   userInput.value = "Jaffar Aman";
// }

// function imgChange(img) {
//   var carImg = document.getElementById("carImg");
//   console.log(img);

//   if (img == "car1") {
//     carImg.src = "car2.jpg";
//   } else {
//     carImg.src = "car1.jpg";
//   }
// }

// function mouseOut() {
//   var carImg = document.getElementById("carImg");
//   carImg.src =
//     "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
// }

// function imgChange(e, imgToggle) {
//   //   var carImg = document.getElementById("carImg");
//   console.log(e);

//   if (imgToggle == "car1") {
//     e.src = "car2.jpg";
//   } else {
//     e.src = "car1.jpg";
//   }
// }

// function foo(e) {
//   //   alert("hello class...");
//   console.log("helloooooo");
// }

// function changeColor(element, toggle) {
//   console.log(element);
//   if (toggle == "focus") {
//     element.style.backgroundColor = "blue";
//   } else {
//     element.style.backgroundColor = "green";
//   }
// }

// var input = document.getElementById("input");
// console.log(input);

function getValue(num) {
  var input = document.getElementById("input");
  input.value += num;
  //   console.log(num);
}

function totalValue() {
  var input = document.getElementById("input");
  //   console.log(eval(input.value));
  input.value = eval(input.value);
}

function allClear() {
  var input = document.getElementById("input");
  console.log(input);
  input.value = "";
}
